import { Request, Response } from 'express';
import GenericService from '../services/GenericService';

export interface RequestWithBody<T> extends Request {
  body: T,
}

export type ResponseError = {
  error: unknown;
};

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
  characterError = 'Id must have 24 hexadecimal characters',
}

export default abstract class GenericController<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(public service: GenericService<T>) { }

  abstract create(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  read = async (
    _req: Request,
    res: Response<T[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const objs = await this.service.read();
      return res.status(200).json(objs);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  abstract readOne(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>
  ): Promise<typeof res>;

  abstract update(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  abstract delete(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>
  ): Promise<typeof res>;
}