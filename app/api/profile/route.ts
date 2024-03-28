import {
  deleteProfile,
  fetchProfiles,
  fetchProfilesLimit,
} from "@/app/lib/actions/profiles.action";

import { Tid, Tprofile } from "@/app/lib/type";
import { idSchema, profileSchema } from "@/app/lib/validation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const skip = searchParams.get("skip");

  let products: Tprofile[];
  if (!limit || !skip) {
    products = await fetchProfiles();
  } else {
    const parsedLimit = parseInt(limit, 10);
    const parsedSkip = parseInt(skip, 10);
    if (typeof parsedLimit !== "number") {
      return NextResponse.json(
        { message: "Invalid parametes" },
        { status: 422 }
      );
    }
    if (typeof parsedSkip !== "number") {
      return NextResponse.json(
        { message: "Invalid parametes" },
        { status: 422 }
      );
    }
    products = await fetchProfilesLimit(parsedSkip, parsedLimit);
  }

  if (!products) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 400 }
    );
  }

  return NextResponse.json(products);
};

export const DELETE = async (request: Request) => {
  const data: Tid = await request.json();
  const checkData = idSchema.safeParse(data);
  if (!checkData.success)
    return NextResponse.json(
      { message: "invalid type parameter" },
      { status: 422 }
    );

  const profile = await deleteProfile(data);

  if (!profile) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(profile);
};
