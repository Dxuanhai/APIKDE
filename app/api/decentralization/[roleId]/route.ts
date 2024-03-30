import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/primasdb";
import { fetchProfiles } from "@/app/lib/actions/profiles.action";

interface IParams {
  roleId?: string;
}

interface IRequestBody {
  permissions: {
    id: number;
  }[];
}

export const PUT = async (
  request: NextRequest,
  { params }: { params: IParams }
) => {
  const { roleId } = params;
  const data: IRequestBody = await request.json();

  if (!roleId) {
    return NextResponse.json(
      { message: "Not found parameters" },
      { status: 422 }
    );
  }

  const parsedId = parseInt(roleId, 10);
  if (typeof parsedId !== "number") {
    return NextResponse.json(
      { message: "Invalid parameters" },
      { status: 422 }
    );
  }

  try {
    // Update the role
    const updatedRole = await prisma.role.update({
      where: {
        id: parsedId,
      },
      data: {
        roleName: "Admin", // update the roleName if needed
        updatedAt: new Date(),
      },
    });

    // Update the permissions
    const updatedPermissions = await prisma.rolesOnPermissions.deleteMany({
      where: {
        roleId: parsedId,
      },
    });

    const newPermissions = await prisma.rolesOnPermissions.createMany({
      data: data.permissions.map((permission) => ({
        roleId: parsedId,
        permissionId: permission.id,
      })),
    });

    // Fetch the updated role with permissions
    const updatedRoleWithPermissions = await prisma.role.findUnique({
      where: {
        id: parsedId,
      },
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });

    return NextResponse.json(updatedRoleWithPermissions);
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "ERROR FROM SERVER" }), {
      status: 500,
    });
  }
};

export const GET = async (request: Request) => {
  try {
    const users = await fetchProfiles();
    if (!users) {
      return NextResponse.json(
        { message: "ERROR FROM SERVER" },
        { status: 500 }
      );
    }
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  }
};
