"use server";

import { prisma } from "src/app/utils/prisma";
import handleServerError from "src/app/utils/helpers/handleServerError";
import userDataSchema from "src/app/api/schemas/User/userDataSchema";

export async function getUserDataAction(user_id) {
  try {
    const schema = userDataSchema.parse({ user_id });
    const user = await prisma.user.findUnique({
      where: {
        id: schema.user_id,
      },
      omit: {
        password: true,
      },
    });

    return user;
  } catch (e) {
    return handleServerError(e);
  }
}
