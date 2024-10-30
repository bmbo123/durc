// should not be important a page like a component
// either have it as its own page or make home a component instead
import Home from "@/components/home";

import Messages from "@/components/messages";
export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "black",
      }}
    >
      <Home />
    </div>
  );
}
