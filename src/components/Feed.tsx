import Messages from "./Messages";

interface Post {
  id: number;
  content: string;
  date: Date;
  username: string | null;
  likes: number | null;
}

interface FeedProps {
  posts: Post[];
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
            likes={post.likes}
          />
        );
      })}
    </div>
  );
}
