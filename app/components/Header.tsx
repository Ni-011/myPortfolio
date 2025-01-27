import React from "react";
import { Lovers_Quarrel, Love_Light } from "next/font/google";

const loversQuarrel = Lovers_Quarrel({
  subsets: ["latin"],
  weight: ["400", "400"],
});

const loveLight = Love_Light({
  subsets: ["latin"],
  weight: ["400", "400"],
});

const Header = () => {
  return (
    <div className="pt-5 flex flex-col justify-between items-center">
      <h1 className={`${loveLight.className} text-white text-5xl`}>N</h1>
    </div>
  );
};

export default Header;
