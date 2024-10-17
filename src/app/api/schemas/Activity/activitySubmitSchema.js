import { z } from "zod";

export default z.object({
  id: z.string(),
  track_id: z.string(),
  coins: z.number(),
  experience: z.number(),
});
