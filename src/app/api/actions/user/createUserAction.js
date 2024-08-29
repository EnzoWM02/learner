"use server";

import { prisma } from "src/app/utils/prisma";
import { hashPassword } from "src/app/utils/helpers/password";
import userSchema from "src/app/api/schemas/User/userSchema";
import handleServerError from "src/app/utils/helpers/handleServerError";

export async function createUserAction(form) {
  console.log(`here`, form);
  try {
    const schema = userSchema.parse(form);
    const user = await prisma.user.create({
      data: {
        name: schema.name,
        email: schema.email,
        birth_date: schema.birth_date,
        password: hashPassword(schema.password),
      },
    });
    return user;
  } catch (e) {
    return handleServerError(e);
  }
}
