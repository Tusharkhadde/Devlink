import { NextResponse } from "next/server";
import { getUser } from "@/libs/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  const user = getUser(username);

  if (!user) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}