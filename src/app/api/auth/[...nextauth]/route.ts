import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createHash } from "../signup/route";
import { getUser } from "@/db/queries/select";

const handler = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    signOut: "/",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const passwordHash = await createHash(credentials.password);
        const user = await getUser(credentials.email, passwordHash);
        if (user.length == 0) {
          return null;
        }
        return {
          username: user[0].username,
          email: user[0].email,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
