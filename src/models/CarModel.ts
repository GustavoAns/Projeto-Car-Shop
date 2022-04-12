import { Schema, model as createModel, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
// import CarSchema from '../schemas/CarSchema';
import GenericModel from './GenericModel';

interface CarDocument extends Car, Document { }

const CarSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, {
  versionKey: false,
});

export default class CarModel extends GenericModel<Car> {
  constructor(public model = createModel('Cars', CarSchema)) {
    super(model);
  }
}