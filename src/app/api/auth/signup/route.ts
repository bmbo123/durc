import { createUser } from "@/db/queries/insert";

// import bcrypt from "bcrypt";
// do some hashing stuff here
// use the nextauth secret
// expects
// {
//     email: string
//     password: string
// }}

import crypto from "crypto";
let secret = process.env.NEXTAUTH_SECRET!;

export async function POST(request: Request) {
  const data = await request.json();

  let hmac = crypto.createHmac("sha256", secret);
  let pass = data.password;
  let hash = hmac.update(pass).digest("hex");

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
