import prisma from "@/app/lib/prismadb";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

type RequestData = {
  name: string;
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  // console.log(body);
  let { name, email, password } = body as RequestData;
  // try {
  //   const parsedBody = JSON.parse(body); // Attempt to parse as JSON
  //   var { name, email, password } = parsedBody;
  // } catch (error) {
  //   console.error("JSON Parsing Error:", error);
  //   return new NextResponse("Invalid JSON data", { status: 400 });
  // }
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return new NextResponse("Please fill all fields and with proper type", {
      status: 400,
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const existingUser = await prisma.user
    .findUnique({
      where: {
        email,
      },
    })
    .catch((err) => {
      console.log(err);
      return new NextResponse("Something went wrong", { status: 500 });
    });
  if (existingUser) {
    return new NextResponse("User already exists", { status: 400 });
  }
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    console.log(user);
    return new NextResponse("User created successfully", { status: 200 });
  } catch {
    console.error("Something went wrong");
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
