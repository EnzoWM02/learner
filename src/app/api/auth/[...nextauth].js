import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "src/app/utils/prisma";
import { loginAction } from "src/app/api/actions/Login/loginAction";

const options = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        const userCredentials = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await loginAction(userCredentials);
        if (res.error) {
          return null;
        } else {
          return res;
        }
      },
    }),
  ],

  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
    encryption: true,
  },
  
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-in",
    error: "/sign-in",
  },

  callbacks: {
    async session(session, user) {
      if (user !== null) {
        session.user = user;
      }
      return await session;
    },

    async jwt({ token }) {
      return await token;
    },
  },
};

const auth = (req, res) => NextAuth(req, res, options);
export default auth;
