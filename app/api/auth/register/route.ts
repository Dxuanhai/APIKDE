import { NextResponse } from "next/server";
import { createUser, checkUserExists } from "@/app/lib/actions/user.action";
import { IsignInSchema, IsignUnSchema } from "@/app/lib/type";
import { signUpSchema } from "@/app/lib/validation";

export const POST = async (request: Request) => {
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
    return new NextResponse(JSON.stringify({ message: "ERROR FROM SERVER " }), {
      status: 500,
    });
  }
  return new NextResponse(JSON.stringify(user));
};
