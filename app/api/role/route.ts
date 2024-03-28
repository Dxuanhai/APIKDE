import {
  createRole,
  deleteRoles,
  fetchRoles,
  updateRole,
} from "@/app/lib/actions/role.action";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const roles = await fetchRoles();

  if (!roles) {
    return NextResponse.json({ message: "not found" }, { status: 400 });
  }

  return NextResponse.json(roles);
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const product = await createRole(data);

  if (!product) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(product);
};

export const PUT = async (request: Request) => {
  const data = await request.json();
  const role = await updateRole(data);

  if (!role) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(role);
};

export const DELETE = async (request: Request) => {
  const data = await request.json();
  const role = await deleteRoles(data);

  if (!role) {
    return NextResponse.json({ message: "ERROR FROM SERVER" }, { status: 500 });
  }

  return NextResponse.json(role);
};
