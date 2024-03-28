import prisma from "../../../lib/primasdb";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  id?: string;
}

export const GET = async (
  request: NextRequest,
  { params }: { params: IParams }
) => {
  const { id } = params;

  if (!id)
    return NextResponse.json(
      { message: "Not found parametes" },
      { status: 422 }
    );
  const parsedId = parseInt(id, 10);
  if (typeof parsedId !== "number")
    return NextResponse.json({ message: "Invalid parametes" }, { status: 422 });

  const profile = await prisma.profile.findUnique({
    where: { id: parsedId },
    include: {
      role: true,
    },
  });

  if (!profile) {
    return new NextResponse(JSON.stringify({ message: "ERROR FROM SERVER " }), {
      status: 500,
    });
  }
  return NextResponse.json(
    {
      profile: {
        id: profile.id,
        fullName: profile.fullName,
        email: profile.email,
        genders: profile.genders,
        role: {
          id: profile.role?.id,
          role: profile.role?.roleName,
        },
      },
    },
    { status: 200 }
  );
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: IParams }
) => {
  const { id } = params;
  const data = await request.json();
  if (!id)
    return NextResponse.json(
      { message: "Not found parametes" },
      { status: 422 }
    );
  const parsedId = parseInt(id, 10);
  if (typeof parsedId !== "number")
    return NextResponse.json({ message: "Invalid parametes" }, { status: 422 });

  const profile = await prisma.profile.findUnique({
    where: { id: parsedId },
    include: {
      role: true,
    },
  });

  if (!profile) {
    return new NextResponse(JSON.stringify({ message: "ERROR FROM SERVER " }), {
      status: 500,
    });
  }
  const newProfile = await prisma.profile.update({
    where: {
      id: profile.id,
    },
    data: {
      fullName: data.fullName,
      genders: data.genders,
    },
  });
  return new NextResponse(JSON.stringify(newProfile));
};
