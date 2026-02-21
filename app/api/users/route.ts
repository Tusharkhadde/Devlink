import { NextResponse } from "next/server";
import { saveUser } from "@/libs/db";

export async function POST(req: Request) {
  const body = await req.json();

  const user = {
    username: body.username,
    name: body.name,
    bio: body.bio,
    github: body.github,
    linkedin: body.linkedin,
  };

  saveUser(user);

  return NextResponse.json({
    success: true,
    message: "User created",
    user,
  });
}