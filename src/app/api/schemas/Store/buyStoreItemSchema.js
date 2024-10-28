import { z } from "zod";

export default z.object({
  item_id: z.string(),
  item_type: z.string(),
  price: z.number(),
});
