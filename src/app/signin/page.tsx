import Form from "@/components/auth/Form";
import Header from "@/components/Header";
import Link from "next/link";
export default function Page() {
  return (
    <div className="bg-stone h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 p-4 ">
        <Header />
      </div>
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
