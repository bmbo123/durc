import { createUser } from "@/db/queries/insert";

import crypto from "crypto";
let secret = process.env.NEXTAUTH_SECRET!;

export const createHash = async (password: string) => {
  const hmac = crypto.createHmac("sha256", secret);
  const pass = password;
  const hash = hmac.update(pass).digest("hex");
  return hash;
};

export async function POST(request: Request) {
  const data = await request.json();

  const hash = await createHash(data.password);
  const temp = {
    email: data.email,
    passwordHash: hash,
    username: data.username,
  };

  const response = await createUser(temp);
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
