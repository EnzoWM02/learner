"use server";

import { prisma } from "src/app/utils/prisma";
import handleServerError from "src/app/utils/helpers/handleServerError";

export async function updateUserStatus(userId, experience, coins) {
  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        experience: {
          increment: experience,
        },
        coins: {
          increment: coins,
        },
      },
    });

    return user;
  } catch (e) {
    return handleServerError(e);
  }
}
