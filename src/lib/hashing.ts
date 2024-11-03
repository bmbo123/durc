import crypto from "crypto";
const secret = process.env.NEXTAUTH_SECRET!;

export const createHash = async (password: string) => {
  const hmac = crypto.createHmac("sha256", secret);
  const pass = password;
  const hash = hmac.update(pass).digest("hex");
  return hash;
};
