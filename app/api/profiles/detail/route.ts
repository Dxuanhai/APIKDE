// import prisma from "../../../lib/primasdb";
// import { sortProduct } from "@/app/lib/actions/product.action";
// import { detailTypeAnimeScheme, detailTypeScheme } from "@/app/lib/validation";
// import { NextRequest, NextResponse } from "next/server";

// export const GET = async (request: NextRequest) => {
//   const { searchParams } = new URL(request.url);
//   const type = searchParams.get("type");
//   const typeAnime = searchParams.get("typeAnime");

//   if (!typeAnime && type) {
//     if (typeof type !== "string") {
//       return new NextResponse(
//         JSON.stringify({ message: "Invalid parameter type" }),
//         { status: 400 }
//       );
//     }
//     const products = await prisma.product.findMany({
//       where: { type },
//       include: {
//         animes: {
//           select: { type: true },
//         },
//       },
//       orderBy: {
//         title: "asc",
//       },
//     });
//     if (!products) {
//       return new NextResponse(
//         JSON.stringify({ message: "ERROR FROM SERVER " }),
//         {
//           status: 500,
//         }
//       );
//     }
//     return new NextResponse(JSON.stringify(products));
//   }

//   if (typeof type !== "string") {
//     return new NextResponse(
//       JSON.stringify({ message: "Invalid parameter type" }),
//       { status: 400 }
//     );
//   }
//   if (typeof typeAnime !== "string") {
//     return new NextResponse(
//       JSON.stringify({ message: "Invalid parameter type" }),
//       { status: 400 }
//     );
//   }
//   const checkType = detailTypeScheme.safeParse(type?.toUpperCase());
//   const checkTypeAnime = detailTypeAnimeScheme.safeParse(
//     typeAnime?.toUpperCase()
//   );
//   if (!checkType.success)
//     return new NextResponse(
//       JSON.stringify({
//         message: ` TYPE ONLY INCLUDES ["ANIME", "TOY", "BOX"]`,
//       }),
//       { status: 422 }
//     );
//   if (!checkTypeAnime.success)
//     return new NextResponse(
//       JSON.stringify({
//         message: `"TYPEANIME ONLY INCLUDES [TV", "MOVIE", "GAME", "OTHER", "NONE]"`,
//       }),
//       { status: 422 }
//     );
//   const products = await sortProduct(
//     type.toUpperCase(),
//     typeAnime.toUpperCase()
//   );
//   if (!products) {
//     return new NextResponse(JSON.stringify({ message: "ERROR FROM SERVER " }), {
//       status: 500,
//     });
//   }
//   return new NextResponse(JSON.stringify(products));
// };
