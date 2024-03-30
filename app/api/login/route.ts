import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../lib/primasdb";
import { IsignInSchema } from "@/app/lib/type";
import { signInSchema } from "@/app/lib/validation";
import { createPermisson } from "@/app/lib/actions/permisstion.action";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    // const parseBody = signInSchema.safeParse(body);

    // if (!parseBody.success)
    //   return NextResponse.json(parseBody.error.message, { status: 422 });

    const user = await prisma.profile.findUnique({
      where: {
        email: body.email,
      },
      include: {
        role: true,
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

    return NextResponse.json({
      profile: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        genders: user.genders,
        role: {
          id: user.role?.id,
          role: user.role?.roleName,
        },
      },
    });
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  }
};
