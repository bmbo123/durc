import Tweet from "@/components/tweet";
import Messages from "@/components/messages";
import { getPosts } from "@/db/queries/select";

// this is a server component that will run on our serer
export default async function Home() {
  // we can directly call the database query here in this component
  // we can do queries here like this
  // but if we want to create / update data we need an api end point that will be called with fetch
  let posts = await getPosts();
  return (
    <div className="h-screen bg-stone-950 justify-center">
      <Tweet />
      {posts?.map((post, i) => {
        return (
          <Messages
            key={i}
            message={post.content}
            name="fein"
            username={post.username}
            date={post.date.toString()}
          />
        );
      })}
    </div>
  );
}
