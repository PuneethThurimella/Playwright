import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string().email(),
  name: z.string(),
  address: z.object({
    city: z.string(),
    zipcode: z.string()
  })
});

// const result = UserSchema.safeParse(body.data);