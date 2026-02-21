"use server";

import { saveUser } from "@/libs/db";
import { redirect } from "next/navigation";

export async function createProfile(formData: FormData) {
  const user = {
    username: formData.get("username") as string,
    name: formData.get("name") as string,
    bio: formData.get("bio") as string,
    github: formData.get("github") as string,
    linkedin: formData.get("linkedin") as string,
  };

  saveUser(user);
  redirect(`/${user.username}`);
}