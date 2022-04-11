import { ZodError } from 'zod';

import CarModel from '../models/CarModel';
import { Car } from '../interfaces/CarInterface';
// import CarType, { CarSchema } from '../schemas/ZodCarSchema';
import GenericService from './GenericService';

export interface ServiceError {
  error: ZodError;
}

export default class CarService extends GenericService<Car> {
  constructor(public model = new CarModel()) {
    super(model);
  }

  // create = async (obj: Car): Promise<Car | ServiceError | null> => {
  //   const parsed = CarSchema.safeParse(obj);
  //   if (!parsed.success) {
  //     return { error: parsed.error };
  //   }
  //   const item = await this.model.create(obj);
  //   return item;
  // };
}