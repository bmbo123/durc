import Home from "@/components/Home";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const slug = (await params).username;
  return (
    <div className="bg-stone-950 h-screen flex align-middle justify-center ">
      viewing profile for <span className="text-indigo-700">{slug}</span>
    </div>
  );
}
