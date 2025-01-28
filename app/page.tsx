import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen">
      <div className="p-5">
        <Header />
        <Hero />
        <Achievements />
      </div>
    </div>
  );
}
