"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import buyStoreItemSchema from "src/app/api/schemas/Store/buyStoreItemSchema";
import ErrorCodes from "src/app/utils/constants/ErrorCodes";
import handleServerError from "src/app/utils/helpers/handleServerError";
import prisma from "src/app/utils/prisma";

export async function buyStoreItemAction(title) {
  try {
    return await prisma.$transaction(async (tx) => {
      const schema = buyStoreItemSchema.parse(title);
      const session = await getServerSession(authOptions);

      const user = await tx.user.findUnique({
        where: { id: session.id },
      });

      if (user.coins < schema.price) {
        return handleServerError({
          type: ErrorCodes.STORE,
          message: "Você não tem dinheiro suficiente",
        });
      }

      const storeItem = await tx.userInventory.create({
        data: {
          user_id: session.id,
          item_type: schema.item_type,
          item_id: schema.item_id,
        },
      });

      await tx.user.update({
        where: { id: session.id },
        data: { coins: { decrement: schema.price } },
      });

      return storeItem;
    });
  } catch (e) {
    return handleServerError(e);
  }
}
