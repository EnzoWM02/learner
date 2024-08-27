'use server'

import { prisma } from "src/app/utils/prisma";
import { Prisma } from "@prisma/client";
import { hashPassword } from "src/app/utils/helpers/password";

export async function CreateUserAction(form) {
  console.log(formData);
  const { name, email, password, birth_date } = req.body;

//   if (!name || !email || !password || !birth_date) {
//     return res.status(400).json({ message: "invalid inputs" });
//   }

//   if (password.length < 6) {
//     return res
//       .status(406)
//       .json("Password length should be more than 6 characters");
//   }

//   try {
//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         birth_date,
//         password: hashPassword(req.body.password),
//       },
//     });
//     return res.status(201).json({ user });
//   } catch (e) {
    // return res.status(400).json({ message: e.message });
//   }
}
