import { z } from "zod";
import prisma from "../../../lib/primasdb";
import { NextResponse } from "next/server";

interface IParams {
  id?: string;
}

export const GET = async (
  request: Request,
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
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const data = await request.json();

    const parsedId = parseInt(id, 10);
    if (typeof parsedId !== "number")
      return NextResponse.json(
        { message: "Invalid parametes" },
        { status: 422 }
      );
    const profile = await prisma.profile.findUnique({
      where: { id: parsedId },
      include: {
        role: true,
      },
    });

    if (!profile) {
      return NextResponse.json(
        { message: "Profile not found" },
        { status: 404 }
      );
    }

    const newProfile = await prisma.profile.update({
      where: {
        id: profile.id,
      },
      data: {
        fullName: data.fullName,
        genders: profile.genders,
      },
    });

    return NextResponse.json(newProfile);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid parameters" },
        { status: 422 }
      );
    }
    console.log(error);

    return NextResponse.json(
      { message: "Error updating profile" },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const parsedId = parseInt(id, 10);

    if (typeof parsedId !== "number") {
      return NextResponse.json(
        { message: "Invalid parameters" },
        { status: 422 }
      );
    }

    const profile = await prisma.profile.findUnique({
      where: { id: parsedId },
    });

    if (!profile) {
      return NextResponse.json(
        { message: "Profile not found" },
        { status: 404 }
      );
    }

    await prisma.profile.delete({
      where: {
        id: profile.id,
      },
    });

    return NextResponse.json(
      { message: "Profile deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error deleting profile" },
      { status: 500 }
    );
  }
};
