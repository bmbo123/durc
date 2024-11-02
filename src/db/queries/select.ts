import { db } from "@/db/index";
import { postsTable } from "@/db/schema";
import { desc } from "drizzle-orm";

// everything you need is here
// https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel

// need to make insert file to create functions to insert users

// when you need data you import one of these functions to call
// you define all your database queries in one spot so its cleaner
// these are database queries. not api endpoints.

// get the posts
// need to add data and then sort by dates later
export async function getPosts(limit = 30) {
  return db
    .select()
    .from(postsTable)
    .orderBy(desc(postsTable.date))
    .limit(limit);
}

// write this
export async function getUser(email: string, passwordHash: string) {}
