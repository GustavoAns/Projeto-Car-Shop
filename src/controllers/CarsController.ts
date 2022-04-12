import { Request, Response } from 'express';
// eslint-disable-next-line max-len
import GenericController, { RequestWithBody, ResponseError } from './GenericController';
import CarService from '../services/CarService';
import { Car } from '../interfaces/CarInterface';

export default class CarController extends GenericController<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const frame = await this.service.create(body);
      if (!frame) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in frame) {
        return res.status(400).json(frame);
      }
      return res.status(201).json(frame);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const frame = await this.service.readOne(id);
      return frame
        ? res.status(200).json(frame)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(400).json({ error: this.errors.characterError });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const frame = await this.service.delete(id);
      return frame
        ? res.status(200).json(frame)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    const { id } = req.params;
    try {
      const frame = await this.service.update(id, body);
      return frame
        ? res.status(200).json(frame)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(400).json({ error: this.errors.characterError });
    }
  };
}