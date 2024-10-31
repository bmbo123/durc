export default function Messages({
  message,
  name,
}: {
  message: string;
  name: string;
}) {
  return (
    <div className="w-full p-12 bg-stone-950 flex align-middle justify-center border-zinc-800 border-[1px] border-b-0">
      {message}
    </div>
  );
}
