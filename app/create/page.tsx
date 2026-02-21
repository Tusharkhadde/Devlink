import { createProfile } from "../actions";

export default function CreatePage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form action={createProfile} className="flex flex-col gap-3 w-80 border p-6 rounded-xl">
        <h2 className="text-2xl font-bold">Create Profile</h2>

        <input name="username" placeholder="username" className="border p-2" required />
        <input name="name" placeholder="name" className="border p-2" required />
        <input name="bio" placeholder="bio" className="border p-2" />
        <input name="github" placeholder="github url" className="border p-2" />
        <input name="linkedin" placeholder="linkedin url" className="border p-2" />

        <button className="bg-black text-white p-2 rounded">Save</button>
      </form>
    </div>
  );
}