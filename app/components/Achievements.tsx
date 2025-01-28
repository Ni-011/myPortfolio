import React from "react";

const Achievements = () => {
  return (
    <div className="px-20 py-60">
      <div>
        <h1 className="text-neutral-300 text-center text-[8em] p-10">
          Achievements
        </h1>

        <div className="p-10 px-0 grid grid-cols-2">
          <div>left, space for image</div>
          <div className="flex flex-col gap-10">
            <h1 className="text-center text-8xl">Hackatron Win</h1>
            <p className="text-3xl">
              In 2023, I with my team Won a $3000 prize in the Hackatron Season
              5 hackathon, Hackatron is an Internation Hackathon to promote
              innovation hosted by the Tron Organization annually. Tron is a
              blockchain mostly popular for the USDT. Our project was
              MeloSynthiaAI which is a music generation AI that can generate
              music based on the user's input including lyrics and the song,
              then it can be converted to an NFT and sold on the NFT
              marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
