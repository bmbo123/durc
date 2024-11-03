// components/SignOutButton.js
"use client";

// sign out little thing for now

import { signOut } from "next-auth/react";

export default function SignOutButton({ userName }: { userName: string }) {
  return (
    <p>
      hey,{" "}
      <span
        className="underline font-bold hover:cursor-pointer hover:text-red-500"
        onClick={() => signOut()}
      >
        {userName}
      </span>
    </p>
  );
}
