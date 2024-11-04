// create all your tables and define your relations here
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm/sql";
export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
});

export const postsTable = pgTable("posts_table", {
  id: serial("id")
    .primaryKey()
    .default(sql`nextval('posts_table_id_seq')`),
  content: text("content").notNull(),
  username: text("username").notNull(),
  date: timestamp("date")
    .notNull()
    .default(sql`now()`),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
