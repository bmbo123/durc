import { createPost } from "@/db/queries/insert";
import { validateRequest } from "@/lib/requestValidator";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { getUserByUsername } from "@/db/queries/select";

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

  if (!session.user || !session.user.name) {
    return Response.json({ status: 500, message: "Could not get username" });
  }

  const user = await getUserByUsername(session.user?.name);

  if (user.length === 0) {
    return Response.json({ status: 500, message: "Could not get user" });
  }

  const post = {
    ...data,
    authorId: user[0].id,
  };

  const response = await createPost(post);

  return Response.json(response);
}
