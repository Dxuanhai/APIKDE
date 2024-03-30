import prisma from "../primasdb";
import bcrypt from "bcrypt";
import { Iuser } from "../type";


export const checkUserExists = async (email: string): Promise<boolean> => {
  try {
    const userExists = await prisma.profile.findUnique({
      where: { email },
    });
    if (userExists) return true;
    return false;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const createUser = async (data: Iuser) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 12);

    const user = await prisma.profile.create({
      data: {
        email: data.email,
        password: hashedPassword,
        genders: data.genders,
        fullName: data.fullName,
        roleId: 1,
      },
      include: {
        role: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
