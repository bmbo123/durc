import { createPost } from "@/db/queries/insert";
export async function POST(request: Request) {
  const data = await request.json();
  let response = await createPost(data);
  return Response.json(response);
}
