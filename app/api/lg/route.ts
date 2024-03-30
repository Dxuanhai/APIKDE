import { NextResponse } from "next/server";
import { signInSchema } from "@/app/lib/validation";
import { login } from "@/app/lib/actions/auth.action";

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
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  }
};
