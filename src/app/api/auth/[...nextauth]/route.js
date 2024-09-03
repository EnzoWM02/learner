import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginAction } from "src/app/api/actions/Login/loginAction";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        console.log("credentials", credentials);
        const userCredentials = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await loginAction(userCredentials);
        console.log("res", res);
        if (res.error) {
          return null;
        } else {
          return res;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
