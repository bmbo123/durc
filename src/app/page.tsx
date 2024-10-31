// should not be important a page like a component
// either have it as its own page or make home a component instead
import Home from "@/components/home";

export default function Page() {
  return (
    <div className="bg-stone-950 h-screen flex justify-center">
      <Home />
    </div>
  );
}
