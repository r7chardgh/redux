import Image from "next/image";
import Counter from "./ui/counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3 p-24">
      <h1 className="text-xl">main page</h1>
      <Counter />
    </main>
  );
}
