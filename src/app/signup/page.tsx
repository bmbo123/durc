"use client";
import Home from "@/components/home";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
export default function Page() {
  const [hover, sethover] = useState(false);
  return (
    <div className="bg-stone h-screen flex flex-col items-center justify-center">
      <p className="font-sans  font-semibold mb-4">
        sign up or{" "}
        <span className="hover:text-indigo-700 underline font-bold">
          {" "}
          sign in
        </span>
      </p>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="border-l-2 border-gray-300  w-64 p-2 bg-stone-950 text-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="border-l-2 border-gray-300  w-64 p-2 bg-stone-950 text-white focus:outline-none "
        />
      </div>
      <button
        onMouseOver={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        <ArrowRight strokeWidth={hover ? 2 : 1} />
      </button>
    </div>
  );
}
