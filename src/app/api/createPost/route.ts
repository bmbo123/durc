import { createPost } from "@/db/queries/insert";
import { validateRequest } from "@/lib/requestValidator";
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

  const response = await createPost(data);

  return Response.json(response);
}
