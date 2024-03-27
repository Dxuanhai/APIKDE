// import { counTprofiles } from "@/app/lib/actions/product.action";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  // const quantity = await counTprofiles();
  // if (!quantity)
  //   return NextResponse.json({ message: "ERROR FROM SERVER", status: 500 });
  return NextResponse.json("quantity");
};
