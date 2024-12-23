import { db } from "../index";
import { InsertPost, InsertUser, postsTable, usersTable } from "../schema";

export async function createUser(data: InsertUser) {
  return await db.insert(usersTable).values(data).returning();
}

export async function createPost(data: InsertPost) {
  return await db.insert(postsTable).values(data).returning();
}
