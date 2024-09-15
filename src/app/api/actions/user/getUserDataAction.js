"use server";

import { prisma } from "src/app/utils/prisma";
import handleServerError from "src/app/utils/helpers/handleServerError";
import userDataActionSchema from "src/app/api/schemas/User/userDataActionSchema";
import userDataSchema from "src/app/api/schemas/User/userDataSchema";
import { calculateLevelAction } from "src/app/api/services/User/calculateLevelService";

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

    return userDataSchema.parse({
      ...user,
      level: calculateLevelAction(user),
    });
  } catch (e) {
    return handleServerError(e);
  }
}
