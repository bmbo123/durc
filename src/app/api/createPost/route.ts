import { createPost } from "@/db/queries/insert";
export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  createPost(data);
  return Response.json({});
}
