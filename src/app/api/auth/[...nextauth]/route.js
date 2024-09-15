import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginAction } from "src/app/api/actions/Login/loginAction";
import { prisma } from "src/app/utils/prisma";

export const authOptions = {
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
    signOut: "/sign-out",
    error: "/sign-in",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token = { id: user.id };
      }
      return token;
    },
    async session({ session, token }) {
      session = {
        id: token.id,
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
