"use server";

import loginSchema from "src/app/api/schemas/Login/loginSchema";
import ErrorCodes from "src/app/utils/constants/ErrorCodes";
import handleServerError from "src/app/utils/helpers/handleServerError";
import { hashPassword } from "src/app/utils/helpers/password";
import { prisma } from "src/app/utils/prisma";

export async function loginAction(form) {
  try {
    const schema = loginSchema.parse(form);

    const user = await prisma.user.findUnique({
      where: { email: schema.email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        birth_date: true,
      },
    });
    if (user && user.password === hashPassword(schema.password)) {
      return this.exclude(user, ["password"]);
    } else {
      return handleServerError({
        type: ErrorCodes.LOGIN,
        message: "As credenciais estão incorretas",
      });
    }
  } catch (e) {
    return handleServerError(e);
  }
}

const exclude = (user, keys) => {
  for (let key of keys) {
    delete user[key];
  }
  return user;
};
