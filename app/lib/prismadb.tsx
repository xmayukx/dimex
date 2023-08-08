import { PrismaClient } from "@prisma/client";

// const globalThis: { prisma?: any } = {};
// const client: PrismaClient = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_ENV === "production") globalThis.prisma = client;

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}
export default prisma;
