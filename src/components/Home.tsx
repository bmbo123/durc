import Tweet from "@/components/Tweet";
import { getPosts } from "@/db/queries/select";
import { getServerSession } from "next-auth";
import SignUpIn from "./auth/SignUpIn";
import SignOutButton from "./auth/SignOut";
import Feed from "./Feed";
import Header from "./Header";

// this is a server component that will run on our serer
export default async function Home() {
  const posts = await getPosts();

  // https://next-auth.js.org/configuration/nextjs
  // get session on server instead of client cause its faster
  const session = await getServerSession();

  return (
    <div className="h-screen bg-stone-950 pt-8 md:pt-12 align-center flex flex-col justify-start gap-6 md:gap-8 w-full md:w-[600px] p-8 md:p-0">
      <div className="flex justify-between items-end md:-mb-4 ">
        <Header />
        {session !== null ? (
          <SignOutButton userName={session?.user?.name as string} />
        ) : (
          <>
            <span>sign in to post tweets</span>
            <SignUpIn />
          </>
        )}
      </div>
      {session !== null ? <Tweet /> : null}
      <Feed posts={posts} />
    </div>
  );
}
