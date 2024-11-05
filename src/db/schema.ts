// create all your tables and define your relations here
import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm/sql";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
});

export const usersTableRelations = relations(usersTable, ({ many }) => ({
  posts: many(postsTable),
  likes: many(likesTable),
}));

export const postsTable = pgTable("posts_table", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  authorId: integer("author_id")
    .notNull()
    .references(() => usersTable.id),
  date: timestamp("date")
    .notNull()
    .default(sql`now()`),
  numLikes: integer("likes").default(0),
});

export const postsTableRelations = relations(postsTable, ({ one, many }) => ({
  author: one(usersTable, {
    fields: [postsTable.authorId],
    references: [usersTable.id],
  }),
  likes: many(likesTable),
}));

export const likesTable = pgTable(
  "likes_table",
  {
    postId: integer("post_id")
      .notNull()
      .references(() => postsTable.id),
    userId: integer("user_id")
      .notNull()
      .references(() => usersTable.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.postId, table.userId] }),
    };
  },
);

export const likesTableRelations = relations(likesTable, ({ one, many }) => ({
  post: one(postsTable, {
    fields: [likesTable.postId],
    references: [postsTable.id],
  }),
  user: one(usersTable, {
    fields: [likesTable.userId],
    references: [usersTable.id],
  }),
}));

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
