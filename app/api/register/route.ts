import { NextResponse } from "next/server";
import { createUser, checkUserExists } from "@/app/lib/actions/auth.action";
import { IsignInSchema, IsignUnSchema } from "@/app/lib/type";
import { signUpSchema } from "@/app/lib/validation";
import { fetchProfiles } from "@/app/lib/actions/profiles.action";

export const POST = async (request: Request) => {
  try {
    const body: IsignUnSchema = await request.json();

    const parseForm = signUpSchema.safeParse(body);

    if (!parseForm.success) {
      return NextResponse.json(parseForm.error.message, { status: 422 });
    }
    const userExists = await checkUserExists(body.email);
    if (userExists)
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );

    const user = await createUser(body);

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "ERROR FROM SERVER " }),
        {
          status: 500,
        }
      );
    }
    return new NextResponse(
      JSON.stringify({
        message: "create successful",
        profile: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          genders: user.genders,
          role: {
            id: user.role?.id,
            role: user.role?.roleName,
          },
        },
      })
    );
  } catch (error) {
    throw error;
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
