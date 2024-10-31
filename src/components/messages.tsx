export default function Messages({
  message,
  name,
  username,
  date,
}: {
  message: string;
  name: string;
  username: string;
  date: string;
}) {
  return (
    <>
      <div className="w-full p-12 bg-stone-950 flex justify-center border-zinc-800 border-[1px] border-b-0">
        {message}
      </div>
      <div className="bg-white">
        {username}, {name}
      </div>
      <div className="bg-grey">{date}</div>
    </>
  );
}
