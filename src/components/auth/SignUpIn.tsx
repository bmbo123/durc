import Link from "next/link";
export default function SignUpIn() {
  return (
    <div className="flex gap-2 items-center">
      <Link
        href="/signin"
        className="hover:text-indigo-700 underline font-bold"
      >
        sign in
      </Link>
      <Link
        href="/signup"
        className="hover:text-indigo-700 underline font-bold"
      >
        sign up
      </Link>
    </div>
  );
}
