import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

// export interface Car extends Vehicle {
//   doorsQty: number;
//   seatsQty: number;
// }

const CarSchema = VehicleSchema.extend({
  doorsQty: z.number({
    required_error: 'DoorsQty is required',
    invalid_type_error: 'DoorsQty must be a number',
  }).gte(2).lte(4),
  seatsQty: z.number({
    required_error: 'SeatsQty is required',
    invalid_type_error: 'SeatsQty must be a number',
  }).gte(2).lte(7),
});

type Car = z.infer<typeof CarSchema>;

export { CarSchema, Car };