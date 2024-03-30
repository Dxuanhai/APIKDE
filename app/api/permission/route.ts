import {
  createPermisson,
  deletePermisson,
  fetchPermissions,
  updatePermission,
} from "@/app/lib/actions/permisstion.action";
import { Tid, Tprofile } from "@/app/lib/type";
import { idSchema, profileSchema } from "@/app/lib/validation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const permission = await fetchPermissions();

  if (!permission) {
    return NextResponse.json({ message: "not found" }, { status: 400 });
  }

  return NextResponse.json(permission);
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const product = await createPermisson(data);

  if (!product) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(product);
};

export const PUT = async (request: Request) => {
  const data: Tprofile = await request.json();
  const permission = await updatePermission(data);

  if (!permission) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(permission);
};

export const DELETE = async (request: Request) => {
  const data: Tid = await request.json();
  const checkData = idSchema.safeParse(data);
  if (!checkData.success)
    return NextResponse.json(
      { message: "invalid type parameter" },
      { status: 422 }
    );

  const permission = await deletePermisson(data);

  if (!permission) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(permission);
};
