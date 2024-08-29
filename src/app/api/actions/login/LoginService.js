import { hashPassword } from "src/app/utils/helpers/password";
import { prisma } from "src/app/utils/prisma";

export class LoginService {
  async handle(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "invalid inputs" });
    }
    try {
      const user = await prisma.user.findUnique({
        where: { email: email },
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
          birth_date: true,
        },
      });
      if (user && user.password === hashPassword(password)) {
        return res.status(200).json(this.exclude(user, ["password"]));
      } else {
        return res.status(401).json({ message: "invalid credentials" });
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  exclude(user, keys) {
    for (let key of keys) {
      delete user[key];
    }
    return user;
  }
}
