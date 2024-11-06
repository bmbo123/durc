import Messages from "./Messages";
import { getPosts } from "@/db/queries/select";
import { Suspense } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

async function PostsList() {
  const posts = await getPosts();
  return (
    <div>
      {posts?.map((post, i) => (
        <Messages
          key={i}
          message={post.content}
          username={post.username}
          date={post.date}
          likes={post.likes}
        />
      ))}
    </div>
  );
}

function MessagesSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="flex justify-between items-center w-full">
        <div>
          <Skeleton count={1} width={100} />
        </div>
      </div>
      <hr className="border-zinc-700 h-1 w-full" />
      <div className="w-full pt-4 pb-8 bg-stone-950 flex justify-between items-center border-zinc-800 border-[0px] border-b-0 border-t-0">
        <div className="w-full">
          <Skeleton count={3} width={"100%"} />
        </div>
      </div>
    </SkeletonTheme>
  );
}

function PostsSkeleton() {
  return (
    <div>
      {Array.from({ length: 25 }, (_, i) => (
        <MessagesSkeleton key={i} />
      ))}
    </div>
  );
}

export default function Feed() {
  return (
    <Suspense fallback={<PostsSkeleton />}>
      <PostsList />
    </Suspense>
  );
}
