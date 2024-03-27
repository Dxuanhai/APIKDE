import prisma from "../../../lib/primasdb";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  id?: string;
}

export const GET = async (
  request: NextRequest,
  { params }: { params: IParams }
) => {
  // const { id } = params;

  // if (!id)
  //   return NextResponse.json(
  //     { message: "Not found parametes" },
  //     { status: 422 }
  //   );
  // const parsedId = parseInt(id, 10);
  // if (typeof parsedId !== "number")
  //   return NextResponse.json({ message: "Invalid parametes" }, { status: 422 });

  // const product = await prisma.product.findUnique({
  //   where: { id: parsedId },
  //   include: {
  //     animes: { select: { type: true } },
  //   },
  // });

  // if (!product) {
  //   return new NextResponse(JSON.stringify({ message: "ERROR FROM SERVER " }), {
  //     status: 500,
  //   });
  // }
  return new NextResponse(JSON.stringify("product"));
};
