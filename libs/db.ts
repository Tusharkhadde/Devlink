import fs from "fs";
import path from "path";
import { User } from "@/types/user";

const filePath = path.join(process.cwd(), "data.json");

export function getUsers(): User[] {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function saveUser(user: User) {
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

export function getUser(username: string) {
  const users = getUsers();
  return users.find((u) => u.username === username);
}