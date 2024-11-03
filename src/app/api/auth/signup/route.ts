import { createUser } from "@/db/queries/insert";
import { createHash } from "@/lib/hashing";

export async function POST(request: Request) {
  const data = await request.json();

  const hash = await createHash(data.password);
  const userInfo = {
    email: data.email,
    passwordHash: hash,
    username: data.username,
  };

  const response = await createUser(userInfo);

  if (response.length == 0) {
    return new Response("User already exists", { status: 400 });
  }

  return new Response(
    JSON.stringify({
      email: response[0].email,
      username: response[0].username,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
