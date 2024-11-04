import Link from "next/link";
import Form from "@/components/auth/Form";
import Header from "@/components/Header";
export default function Page() {
  return (
    <div className="bg-stone h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 p-4 ">
        <Header />
      </div>
      <p className="font-sans  font-semibold mb-4">
        sign up or{" "}
        <Link
          href="/signin"
          className="hover:text-indigo-700 underline font-bold"
        >
          sign in
        </Link>
      </p>
      <Form formType="signup" />
    </div>
  );
}
