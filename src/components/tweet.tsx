export default function Tweet() {
  return (
    <div
      style={{
        width: "500px",
        height: "200px",
        background: "linear-gradient(to bottom, #000080, #1E90FF)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0px",
        overflow: "hidden",
        border: "1px solid grey",
      }}
    >
      TWEET
      <input
        type="text"
        style={{
          width: "400px",
          height: "50px",
          background: "white",
          color: "black",
          fontSize: "16px",
          border: "none",
          outline: "none",
          padding: "10px",
          borderRadius: "20px",
        }}
        placeholder="What's happening?"
      />
    </div>
  );
}
