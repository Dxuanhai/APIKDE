import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/primasdb";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (typeof email !== "string") {
    return new NextResponse(
      JSON.stringify({ message: "Invalid parameter type" }),
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      isAdmin: true,
    },
  });

  if (!user) {
    return new NextResponse(JSON.stringify({ message: "ERROR FROM SERVER " }), {
      status: 500,
    });
  }
  return new NextResponse(JSON.stringify(user));
};
