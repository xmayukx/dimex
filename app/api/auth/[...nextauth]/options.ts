import type { NextAuthOptions, RequestInternal } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

type Credentials = {
  email: string;
  password: string;
};

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
        email: {
          label: "Email",
          type: "string",
          placeholder: "type your email",
        },
        password: {
          label: "Password",
          type: "string",
          placeholder: "your password",
        },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
      ) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please fill all fields");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user?.hashedPassword) {
          throw new Error("User does not exist or try logging in with google");
        }

        const isMatch = await bcrypt.compare(
          credentials?.password,
          user?.hashedPassword,
        );
        if (!isMatch) {
          throw new Error("Invalid Password");
        } else {
          return user;
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  // pages: {
  //   signIn: '/signin',
  //   // signOut: '/auth/signout',
  //   // error: '/auth/error', // Error code passed in query string as ?error=
  //   // verifyRequest: '/auth/verify-request', // (used for check email message)
  //   // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  debug: process.env.NODE_ENV === "development",
};
