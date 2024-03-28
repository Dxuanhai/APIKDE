import { countProfiles } from "@/app/lib/actions/profiles.action";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const quantity = await countProfiles();
  if (!quantity)
    return NextResponse.json({ message: "ERROR FROM SERVER", status: 500 });
  return NextResponse.json("quantity");
};
