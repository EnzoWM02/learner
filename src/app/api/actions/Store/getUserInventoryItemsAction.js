"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import handleServerError from "src/app/utils/helpers/handleServerError";
import prisma from "src/app/utils/prisma";

export async function getUserInventoryItemsAction() {
  try {
    const session = await getServerSession(authOptions);
    const items = await prisma.userInventory.findMany({
      where: {
        user_id: session.id,
      },
    });

    return items;
  } catch (e) {
    return handleServerError(e);
  }
}
