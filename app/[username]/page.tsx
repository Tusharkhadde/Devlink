import { getUser } from "@/libs/db";
import { notFound } from "next/navigation";

type Props = {
  params: { username: string };
};

export default async function Profile({ params }: Props) {
  const { username } = await params;
  const user = getUser(username);

  if (!user) return notFound();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border p-6 rounded-xl w-96">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <p className="text-gray-500">@{user.username}</p>

        <p className="mt-4">{user.bio}</p>

        <div className="mt-4 flex flex-col gap-2">
          {user.github && <a href={user.github}>GitHub</a>}
          {user.linkedin && <a href={user.linkedin}>LinkedIn</a>}
        </div>
      </div>
    </div>
  );
}