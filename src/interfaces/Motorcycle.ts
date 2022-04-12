import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

// enum Categorys {
//   Street = 'Street',
//   Custom = 'Custom',
//   Trail = 'Trail',
// }

const categorys = [
  'Street',
  'Custom',
  'Trail',
] as const;

const MotorcycleSchema = VehicleSchema.extend({
  category: z.enum(categorys),
  engineCapacity: z.number({  
    required_error: 'EngineCapacity is required',
    invalid_type_error: 'EngineCapacity must be a number and integer',
  }).gt(0).lte(2500).int(),
});

type Motorcycle = z.infer<typeof MotorcycleSchema>;

export { MotorcycleSchema, Motorcycle };