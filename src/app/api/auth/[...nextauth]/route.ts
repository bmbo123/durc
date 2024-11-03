import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createHash } from "@/lib/hashing";
import { getUser } from "@/db/queries/select";

const handler = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    signOut: "/",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          id: user[0].id.toString(),
          name: user[0].username,
          email: user[0].email,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
