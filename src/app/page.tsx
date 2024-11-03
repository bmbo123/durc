export const dynamic = "force-dynamic";
import Home from "@/components/Home";

export default function Page() {
  return (
    <div className="bg-stone-950 h-screen flex align-middle justify-center relative">
      <Home />
      <div className="absolute top-0 right-0 p-4 flex flex-col"></div>
    </div>
  );
}
