import { db } from "@/db/index";
import { postsTable, usersTable } from "@/db/schema";
import { desc, eq, and } from "drizzle-orm";

// everything you need is here
// https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel

// need to make insert file to create functions to insert users

// when you need data you import one of these functions to call
// you define all your database queries in one spot so its cleaner
// these are database queries. not api endpoints.

// get the posts
// need to add data and then sort by dates later
export async function getPosts(limit = 30) {
  const data = db
    .select({
      id: postsTable.id,
      content: postsTable.content,
      date: postsTable.date,
      username: usersTable.username,
      likes: postsTable.numLikes,
    })
    .from(postsTable)
    .leftJoin(usersTable, eq(postsTable.authorId, usersTable.id))
    .orderBy(desc(postsTable.date))
    .limit(limit);

  // this is for testing
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return data;
}

// write this
export async function getUser(email: string, passwordHash: string) {
  return db
    .select()
    .from(usersTable)
    .where(
      and(
        eq(usersTable.email, email),
        eq(usersTable.passwordHash, passwordHash),
      ),
    );
}

export async function getUserByUsername(username: string) {
  return db
    .selectDistinct()
    .from(usersTable)
    .where(eq(usersTable.username, username))
    .limit(1);
}
