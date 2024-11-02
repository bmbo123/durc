import Tweet from "@/components/Tweet";
import Messages from "@/components/Messages";
import { getPosts } from "@/db/queries/select";

// this is a server component that will run on our serer
export default async function Home() {
  // we can directly call the database query here in this component
  // we can do queries here like this
  // but if we want to create / update data we need an api end point that will be called with fetch
  const posts = await getPosts();
  return (
    <div className="h-screen bg-stone-950 pt-8 md:pt-12 align-center flex flex-col justify-start gap-6 md:gap-8 w-full md:w-[600px] p-8 md:p-0">
      <h1 className="text-4xl font-bold text-center italic underline tracking-wider text-white underline-offset-4 decoration-indigo-500">
        FEIN AI
      </h1>
      <Tweet />
      <div>
        {posts?.map((post, i) => {
          return (
            <Messages
              key={i}
              message={post.content}
              name={post.title}
              username={post.username}
              date={post.date}
            />
          );
        })}
      </div>
    </div>
  );
}
