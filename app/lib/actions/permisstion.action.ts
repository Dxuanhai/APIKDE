import { revalidatePath } from "next/cache";
import prisma from "../primasdb";
import { Tid, Tpermisson, Tprofile } from "../type";

export const fetchPermissions = async () => {
  try {
    const permissions = await prisma.permission.findMany({});
    return permissions;
  } catch (error) {
    console.error("Error fetch permisson:", error);
    throw error;
  }
};

export const createPermisson = async (data: Tpermisson) => {
  try {
    await prisma.permission.create({
      data: {
        permissionName: data.permissionName,
        description: data.description,
      },
    });
    return { message: "created successfully", status: 200 };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const updatePermission = async (data: any) => {
  try {
    const existingPermission = await prisma.permission.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!existingPermission)
      return { message: "Permission not found", status: 422 };

    await prisma.permission.update({
      where: { id: data.id },
      data: {
        description: data.description,
        permissionName: data.permissionName,
      },
    });
    return { message: "Permission updated successfully", status: 200 };
  } catch (error) {
    console.error("Error updating Permission:", error);
    throw error;
  }
};

export const deletePermisson = async (data: Tid) => {
  try {
    const existingPermisson = await prisma.permission.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!existingPermisson) {
      return { message: "Permisson not found", status: 422 };
    }
    await prisma.permission.delete({
      where: {
        id: data.id,
      },
    });
    return { message: "Permisson deleted successfully", status: 200 };
  } catch (error) {
    console.error("Error delete Permisson:", error);
    throw error;
  }
};
