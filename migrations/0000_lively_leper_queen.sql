CREATE TABLE IF NOT EXISTS "likes_table" (
	"post_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "likes_table_post_id_user_id_pk" PRIMARY KEY("post_id","user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"author_id" integer NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"likes" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"username" text NOT NULL,
	"password_hash" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email"),
	CONSTRAINT "users_table_username_unique" UNIQUE("username")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes_table" ADD CONSTRAINT "likes_table_post_id_posts_table_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes_table" ADD CONSTRAINT "likes_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_table" ADD CONSTRAINT "posts_table_author_id_users_table_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
