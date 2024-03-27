import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../lib/primasdb";
import { IsignInSchema } from "@/app/lib/type";
import { signInSchema } from "@/app/lib/validation";

export const POST = async (request: Request) => {
  try {
    const body: IsignInSchema = await request.json();

    const parseBody = signInSchema.safeParse(body);

    if (!parseBody.success)
      return NextResponse.json(parseBody.error.message, { status: 422 });

    const user = await prisma.profile.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user)
      return NextResponse.json(
        { message: "account not exists" },
        { status: 400 }
      );

    const passwordMatch = await bcrypt.compare(body.password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "login successful" }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  }
};
