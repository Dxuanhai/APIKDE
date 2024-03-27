import prisma from "../primasdb";
import bcrypt from "bcrypt";
import { Iuser } from "../type";

// export const getUser = async (userId: number) => {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//     });

//     return user;
//   } catch (error) {
//     // Xử lý lỗi ở đây
//     console.error("Error retrieving user:", error);
//     throw error;
//   }
// };
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
      },
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
