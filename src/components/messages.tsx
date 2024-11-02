"use client";
import { formatDate } from "@/lib/dates";
import { useState } from "react";
import { Heart } from "lucide-react";
export default function Messages({
  message,
  name,
  username,
  date,
}: {
  message: string;
  name: string;
  username: string;
  date: Date;
}) {
  const dateString = formatDate(date);
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div>
          <strong>{username}</strong>, {name}
        </div>
        <div className="bg-grey">{dateString}</div>
      </div>
      <hr className="border-zinc-700 h-1 w-full" />
      <div className="w-full pt-4 pb-8 bg-stone-950 flex justify-between items-center border-zinc-800 border-[0px] border-b-0 border-t-0">
        <div>{message}</div>
        <button onClick={() => setLiked(!liked)}>
          <Heart strokeWidth={liked ? 0 : 1} fill={liked ? "red" : "#none"} />
        </button>
      </div>
    </div>
  );
}
