import Link from "next/link";

export default function Header() {
  return (
    <h1 className="text-4xl font-bold italic underline tracking-wider text-white underline-offset-4 ">
      <Link href="/" className="hover:text-indigo-700 decoration-indigo-500">
        FEIN AI
      </Link>
    </h1>
  );
}
