import { createPost } from "@/db/queries/insert";
import { validateRequest } from "@/lib/requestValidator";
import { getServerSession } from "next-auth";
import { auth } from "@/lib/auth";
import { z } from "zod";

const requestSchema = z.object({
  content: z.string(),
  username: z.string(),
});

export async function POST(request: Request) {
  const result = await validateRequest(request, requestSchema);

  if (!result.success) {
    return result.response;
  }

  const data = result.data;

  const session = await auth();

  if (!session) {
    return Response.json(
      { message: "You must be logged in to create a post" },
      { status: 401 },
    );
  }

  const post = {
    ...data,
    authorId: 4,
  };

  const response = await createPost(post);

  return Response.json(response);
}
