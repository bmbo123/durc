"use client";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Tweet() {
  const router = useRouter();
  const [tweet, setTweet] = useState("");

  const onButtonClick = () => {
    const url = "/api/createPost";
    fetch(url, {
      headers: { contentType: "application/json" },
      method: "POST",
      body: JSON.stringify({
        content: tweet,
        title: "FEIN",
        username: "FEIN",
      }),
    });
    setTweet("");

    setTimeout(() => {
      router.refresh();
    }, 200);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="relative flex w-full items-center gap-4">
        <input
          type="text"
          className="w-full h-12 bg-stone-800 px-4 pr-10 text-white font-16 border-none outline-none rounded-lg"
          placeholder="What's happening?"
          value={tweet}
          onInput={(e) => setTweet(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onButtonClick();
            }
          }}
        />
        <button
          onClick={onButtonClick}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
        >
          <SendHorizontal color="#d6d6d6" />
        </button>
      </div>
    </div>
  );
}
