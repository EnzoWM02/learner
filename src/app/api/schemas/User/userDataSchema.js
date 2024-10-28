import { z } from "zod";

export default z.object({
  name: z.string(),
  email: z.string().email(),
  birth_date: z.date(),
  experience: z.number(),
  level: z.number(),
  coins: z.number(),
  is_admin: z.boolean(),
  title: z
    .object({
      id: z.string(),
      title: z.string(),
      color: z.string(),
      effect: z.string(),
      price: z.number(),
    })
    .nullish(),
});
