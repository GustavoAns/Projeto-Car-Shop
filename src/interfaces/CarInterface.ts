import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

// export interface Car extends Vehicle {
//   doorsQty: number;
//   seatsQty: number;
// }

const CarSchema = VehicleSchema.extend({
  doorsQty: z.number(),
  seatsQty: z.number(),
});

type Car = z.infer<typeof CarSchema>;

export { CarSchema, Car };