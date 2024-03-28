import { revalidatePath } from "next/cache";
import prisma from "../primasdb";
import { Tid, Tprofile } from "../type";

export const countProfiles = async () => {
  try {
    const count = await prisma.profile.count();
    return count;
  } catch (error) {
    return error;
  }
};
export const fetchProfiles = async () => {
  try {
    const products = await prisma.profile.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        genders: true,
        createdAt: true,
        role: true,
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetch profile:", error);
    throw error;
  }
};
// export const fetchTypeProducts = async (
//   type: string,
//   skip: number,
//   take: number,
//   typeAnime: string
// ) => {
//   try {
//     const products = await prisma.product.findMany({
//       skip,
//       take,
//       orderBy: {
//         createdAt: "desc",
//       },
//       where: {
//         type,
//         animes: {
//           some: {
//             type: typeAnime,
//           },
//         },
//       },
//       include: {
//         animes: {
//           select: { type: true },
//         },
//       },
//     });
//     return products;
//   } catch (error) {
//     console.error("Error Fetch Product", error);
//     throw error;
//   } finally {
//     await prisma.$disconnect();
//   }
// };
export const fetchProfilesLimit = async (skip: number, take: number) => {
  try {
    const products = await prisma.profile.findMany({
      skip,
      take,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        role: {
          select: {
            roleName: true,
          },
        },
      },
    });
    return products;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// export const sorTprofile = async (type: string, typeAnime: string) => {
//   try {
//     const products = await prisma.product.findMany({
//       where: {
//         type,
//         animes: {
//           some: {
//             type: typeAnime,
//           },
//         },
//       },
//       orderBy: {
//         title: "asc",
//       },
//     });

//     return products;
//   } catch (error) {
//     console.error("Error sorting products:", error);
//     throw error;
//   }
// };
// export const createProduct = async (data: Tprofile) => {
//   try {
//     await prisma.product.create({
//       data: {
//         urlImage: data.urlImage,
//         title: data.title,
//         link: data.link,
//         type: data.type,
//         desc: data.desc || null,
//         animes: { create: { type: data.animes[0].type } },
//       },
//     });
//     return { message: "created product successfully", status: 200 };
//   } catch (error) {
//     console.error("Error creating user:", error);
//     throw error;
//   }
// };

// export const updateProduct = async (newData: Tprofile) => {
//   try {
//     const existingProduct = await prisma.product.findUnique({
//       where: {
//         id: newData.id,
//       },
//     });
//     if (!existingProduct) return { message: "Product not found", status: 422 };
//     await prisma.product.update({
//       where: { id: newData.id },
//       data: {
//         title: newData.title,
//         desc: newData.desc || null,
//         link: newData.link,
//         type: newData.type,
//         urlImage: newData.urlImage,
//         animes: {
//           update: {
//             where: { id: newData.id },
//             data: {
//               type: newData.animes[0].type,
//             },
//           },
//         },
//       },
//     });
//     return { message: "Product updated successfully", status: 200 };
//   } catch (error) {
//     console.error("Error updating product:", error);
//     throw error;
//   }
// };

export const deleteProfile = async (data: Tid) => {
  try {
    const existingProduct = await prisma.profile.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!existingProduct) {
      return { message: "Product not found", status: 422 };
    }

    return { message: "Product deleted successfully", status: 200 };
  } catch (error) {
    console.error("Error delete product:", error);
    throw error;
  }
};
