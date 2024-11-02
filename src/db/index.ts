// create singular db instance
// config gets the env variable for postgres
import { drizzle } from "drizzle-orm/vercel-postgres";
import { config } from "dotenv";

config({ path: ".env.local" });

export const db = drizzle({ casing: "snake_case" });
