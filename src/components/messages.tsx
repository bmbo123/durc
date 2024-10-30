interface MessagesProps {
  messages: string[];
}

export default function Messages({ messages = [] }: MessagesProps) {
  return (
    <div
      style={{
        width: "500px",
        height: "200px",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid grey",
      }}
    >
      {messages}
    </div>
  );
}
