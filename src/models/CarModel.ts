import mongoose from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import CarSchema from '../schemas/CarSchema';
import GenericModel from './GenericModel';

export default class CarModel extends GenericModel<Car> {
  constructor(public model = mongoose.model('Cars', CarSchema)) {
    super(model);
  }
}