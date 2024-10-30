import Tweet from "@/components/tweet";
import Messages from "@/components/messages";

// don't need to put string[] here
// you already explicitly have it as a string array
const messages = [
  "Hello, World!",
  "Welcome to my website!",
  "I hope you enjoy your stay!",
  "Feel free to leave a message!",
];

export default function Home() {
  return (
    <div
      style={{
        display: "inline",
        justifyContent: "center",
        height: "100vh",
        background: "white",
      }}
    >
      <Tweet />
      <Messages messages={messages} />
    </div>
  );
}
