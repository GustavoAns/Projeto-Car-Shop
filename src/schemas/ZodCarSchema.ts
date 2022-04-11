import { z } from 'zod';

const CarSchema = z.object({
  model: z.string(),
  year: z.number(),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.boolean(),
  buyValue: z.number(),
  doorsQty: z.number(),
  seatsQty: z.number(),
});

type CarType = z.infer<typeof CarSchema>;

export default CarType;
export { CarSchema };