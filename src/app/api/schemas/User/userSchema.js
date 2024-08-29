import { z } from "zod";

export default z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  birth_date: z.date(),
});
