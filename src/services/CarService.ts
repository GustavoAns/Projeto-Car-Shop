import { Car, CarSchema } from '../interfaces/CarInterface';
import GenericService, { ServiceError } from './GenericService';
import CarModel from '../models/CarModel';

export default class CarService extends GenericService<Car> {
  constructor(public model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const item = await this.model.create(obj);
    return item;
  };
}