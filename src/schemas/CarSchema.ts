import mongoose from 'mongoose';

import { Car } from '../interfaces/CarInterface';

const CarSchema = new mongoose.Schema<Car>({
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

export default CarSchema;