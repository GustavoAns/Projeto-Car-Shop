import { Request, Response } from 'express';
import GenericService from '../services/GenericService';

export interface RequestWithBody<T> extends Request {
  body: T,
}

export type ResponseError = {
  error: unknown;
};

export default class GenericController<T> {
  constructor(public service: GenericService<T>) { }

  public async read(
    _req: Request,
    res: Response<T[]>,
  ): Promise<typeof res> {
    const objs = await this.service.read();
    return res.status(200).json(objs);
  }

  public async readOne(
    req: Request,
    res: Response<T | ResponseError>,
  ): Promise<typeof res> {
    const obj = await this.service.readOne(req.params.id);

    if (!obj) return res.status(404).json({ error: 'Not found' });

    return res.status(200).json(obj);
  }

  public async create(
    req: RequestWithBody<T>,
    res: Response<T>,
  ): Promise<typeof res> {
    const { body } = req;
    const obj = await this.service.create(body);
    return res.status(201).json(obj);
  }

  public async update(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res> {
    const newValues = req.body;
    const obj = await this.service.update(req.params.id, newValues);

    if (!obj) return res.status(404).json({ error: 'Not found' });

    return res.status(200).json(obj);
  }

  public async delete(
    req: Request,
    res: Response<T | ResponseError>,
  ): Promise<typeof res> {
    const obj = await this.service.delete(req.params.id);

    if (!obj) return res.status(404).json({ error: 'Not found' });

    return res.status(200).json(obj);
  }
}