import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen">
      <div className="p-5 flex flex-col gap-[2.5rem]">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
