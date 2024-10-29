"use server";

import prisma from "src/app/utils/prisma";
import handleServerError from "src/app/utils/helpers/handleServerError";
import userDataActionSchema from "src/app/api/schemas/User/userDataActionSchema";
import userDataSchema from "src/app/api/schemas/User/userDataSchema";
import calculateLevelService from "src/app/utils/services/User/calculateLevelService";
import findTitleService from "src/app/utils/services/User/findTitleService";

export async function getUserDataAction(user_id) {
  try {
    const schema = userDataActionSchema.parse({ user_id });
    const user = await prisma.user.findUnique({
      where: {
        id: schema.user_id,
      },
      omit: {
        password: true,
      },
    });

    const title = await prisma.userInventory.findFirst({
      where: {
        user_id: user.id,
        item_type: "title",
        equipped: true,
      },
    });

    return userDataSchema.parse({
      ...user,
      level: calculateLevelService(user),
      title: findTitleService(title),
    });
  } catch (e) {
    return handleServerError(e);
  }
}
