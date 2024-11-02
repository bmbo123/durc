import { config } from "dotenv";

import { createUser } from "@/db/queries/insert";
config({ path: ".env.local" });
// import bcrypt from "bcrypt";
// do some hashing stuff here
// use the nextauth secret
// expects
// {
//     email: string
//     password: string
// }}
let crypto = require("crypto");

let secret = process.env.NEXTAUTH_SECRET;

export async function POST(request: Request) {
  console.log(secret);
  const data = await request.json();

  let hmac = crypto.createHmac("sha256", secret);
  let pass = data.password;
  let hash = hmac.update(pass).digest("hex");

  const temp = {
    email: data.email,
    passwordHash: hash,
    username: data.username,
  };

  console.log(data);
  const response = await createUser(temp);
}
