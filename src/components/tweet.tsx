"use client";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { HashLoader } from "react-spinners";

export default function Tweet() {
  const router = useRouter();
  const [tweet, setTweet] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onButtonClick = async () => {
    const url = "/api/createPost";
    const content = tweet;
    setIsLoading(true);
    await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        content: content,
        username: "Anonymous",
      }),
    });
    setTweet("");
    setIsLoading(false);
    router.refresh();
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
        {isLoading ? (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none cursor-pointer">
            <HashLoader color="#d6d6d6" size={20} />
          </div>
        ) : (
          <button
            onClick={onButtonClick}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          >
            <SendHorizontal color="#d6d6d6" />
          </button>
        )}
      </div>
    </div>
  );
}
