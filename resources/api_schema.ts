import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  email: z.string(),
  married: z.boolean().optional(),
  name: z.string(),
  address: z.object({
    city: z.string(),
    zipcode: z.string()
  })
});

// const result = UserSchema.safeParse(body.data);