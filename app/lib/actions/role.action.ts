import prisma from "../primasdb";
import { Tid } from "../type";

export const fetchRoles = async () => {
  try {
    const roles = await prisma.role.findMany({
      include: {
        permissions: {
          include: {
            permission: {
              select: {
                id: true,
                permissionName: true,
                description: true,
              },
            },
          },
        },
      },
    });
    return roles;
  } catch (error) {
    console.error("Error fetch permisson:", error);
    throw error;
  }
};

export const createRole = async (data: any) => {
  try {
    const { roleName, permissions } = data;
    const role = await prisma.role.create({
      data: {
        roleName: roleName,
        permissions: {
          create: permissions.map((p: any) => ({
            permission: {
              connect: {
                permissionName: p.name,
              },
            },
          })),
        },
      },
      include: {
        permissions: true,
      },
    });

    return { message: "Role created successfully", status: 200, data: role };
  } catch (error) {
    console.error("Error creating role:", error);
    throw error;
  }
};

export const updateRole = async (data: any) => {
  try {
    const { roleId, roleName } = data;
    const role = await prisma.role.update({
      where: {
        id: roleId,
      },
      data: {
        roleName: roleName,
      },
    });

    return { message: "Role updated successfully", status: 200, data: role };
  } catch (error) {
    console.error("Error updating role:", error);
    throw error;
  }
};

export const deleteRoles = async (data: Tid) => {
  try {
    const existingRoles = await prisma.role.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!existingRoles) {
      return { message: "Role not found", status: 422 };
    }
    await prisma.role.delete({
      where: {
        id: data.id,
      },
    });
    return { message: "role deleted successfully", status: 200 };
  } catch (error) {
    console.error("Error delete role:", error);
    throw error;
  }
};
