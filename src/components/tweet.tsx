"use client";

import { useState } from "react";

export default function Tweet() {
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
  };
  const [tweet, setTweet] = useState("");

  return (
    <div className="bg-stone-100 h-[200px] w-[500px] flex justify-center items-center border-1 border-grey border-radius-0 overflow-hidden">
      Tweet
      <input
        type="text"
        className={
          "w-[400px] h-[40px] bg-black color-black font-16 border-none outline-none padding-10 border-radius-20"
        }
        placeholder="What's happening?"
        value={tweet}
        onInput={(e) => setTweet(e.currentTarget.value)}
      />
      <button className={"bg-black"} onClick={onButtonClick}>
        {" "}
        Send
      </button>
    </div>
  );
}
