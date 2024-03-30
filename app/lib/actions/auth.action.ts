import prisma from "../primasdb";
import bcrypt from "bcrypt";
import { Ilogin, Iuser } from "../type";

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

export const login = async (data: Ilogin) => {
  try {
    const user = await prisma.profile.findFirst({
      where: {
        email: data.email,
        password: data.password,
      },
    });
    if (!user) return { message: "account not exist", status: 422 };
    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordMatch) {
      return {
        message: "Invalid email or password",
        status: 401,
      };
    }
    const userOuput = {
      id: user.id,
      email: user.email,
      genders: user.genders,
      roleId: user.roleId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return { data: userOuput, status: 200 };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
