"use client";
import Form from "@/components/Form";
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
      <Form formType="signup" />
    </div>
  );
}
