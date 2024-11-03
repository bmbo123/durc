import Form from "@/components/auth/Form";
import Link from "next/link";
export default function Page() {
  return (
    <div className="bg-stone h-screen flex flex-col items-center justify-center">
      <p className="font-sans  font-semibold mb-4">
        sign in or{" "}
        <Link
          href="/signup"
          className="hover:text-indigo-700 underline font-bold"
        >
          sign up
        </Link>
      </p>
      <Form formType="signin" />
    </div>
  );
}
