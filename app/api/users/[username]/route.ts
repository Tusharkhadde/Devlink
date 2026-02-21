import { NextResponse } from "next/server";
import { getUser } from "@/libs/db";

export async function GET(
  req: Request,
  { params }: { params: { username: string } }
) {
  const user = getUser(params.username);

  if (!user) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}