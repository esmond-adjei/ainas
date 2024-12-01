import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  const { email, password, firstName, lastName } = await request.json();

  // Validate inputs
  if (!email || !password) {
    return NextResponse.json({ error: "Email and Password are required" }, { status: 400 });
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: "Email is already registered" }, { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const user = await prisma.user.create({
    data: { 
      email, 
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName
    },
  });

  return NextResponse.json({ message: "User created successfully", user });
}
