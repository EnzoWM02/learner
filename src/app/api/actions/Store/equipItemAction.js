"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import equipItemSchema from "src/app/api/schemas/Store/equipItemSchema";
import handleServerError from "src/app/utils/helpers/handleServerError";
import prisma from "src/app/utils/prisma";

export async function equipItemAction(item) {
  try {
    return await prisma.$transaction(async (tx) => {
      const schema = equipItemSchema.parse(item);
      const session = await getServerSession(authOptions);

      await tx.userInventory.updateMany({
        where: {
          user_id: session.id,
          item_type: schema.item_type,
          equipped: true,
        },
        data: { equipped: false },
      });

      await tx.userInventory.updateMany({
        where: {
          user_id: session.id,
          item_id: schema.item_id,
          item_type: schema.item_type,
        },
        data: { equipped: true },
      });
    });
  } catch (e) {
    return handleServerError(e);
  }
}
