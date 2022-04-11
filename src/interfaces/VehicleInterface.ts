// export interface Vehicle {
//   model: string;
//   year: number;
//   color: string;
//   status?: boolean;
//   buyValue: number;
// }

import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string(),
  year: z.number(),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.boolean(),
  buyValue: z.number(),
});

type Vehicle = z.infer<typeof VehicleSchema>;

export { VehicleSchema, Vehicle };