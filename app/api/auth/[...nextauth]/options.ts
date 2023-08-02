import type { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials) {
        //Normal email password authentication
        const user = {
          id: "42",
          name: "John",
          email: "john@gmail.com",
          password: "password",
        };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
