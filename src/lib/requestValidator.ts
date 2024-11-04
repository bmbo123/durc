import { ZodSchema } from "zod";

type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; response: Response };

async function validateRequest<T>(
  request: Request,
  schema: ZodSchema<T>,
): Promise<ValidationResult<T>> {
  if (request.headers.get("Content-Type") !== "application/json") {
    return {
      success: false,
      response: new Response("Invalid content type", { status: 400 }),
    };
  }

  const parsedDate = await schema.safeParseAsync(await request.json());

  if (!parsedDate.success) {
    return {
      success: false,
      response: new Response("Invalid request", { status: 400 }),
    };
  }

  return { success: true, data: parsedDate.data };
}

export { validateRequest };
