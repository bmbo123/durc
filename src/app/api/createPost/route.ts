import { db } from "@/db";
import { createPost } from "@/db/queries/insert";
import { InsertPost } from "@/db/schema";
export async function POST(request: Request) {
  let data = await request.json();
  console.log(data);
  createPost(data);
  return Response.json({});
}
