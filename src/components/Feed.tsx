import { SelectPost } from "@/db/schema";
import Messages from "./messages";

interface FeedProps {
  posts: SelectPost[];
}

export default function Feed({ posts }: FeedProps) {
  return (
    <div>
      {posts?.map((post, i) => {
        return (
          <Messages
            key={i}
            message={post.content}
            username={post.username}
            date={post.date}
          />
        );
      })}
    </div>
  );
}
