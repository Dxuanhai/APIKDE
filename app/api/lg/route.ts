import { NextResponse } from "next/server";
import { signInSchema } from "@/app/lib/validation";
import { login } from "@/app/lib/actions/auth.action";
import { fetchProfiles } from "@/app/lib/actions/profiles.action";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const parseBody = signInSchema.safeParse(body);

    if (!parseBody.success)
      return NextResponse.json(parseBody.error.message, { status: 422 });

    const user = await login(parseBody.data);
    if (!user) {
      return NextResponse.json(
        { message: "ERROR FROM SERVER" },
        { status: 500 }
      );
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
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
