import React from "react";

import heroVideo from "../assets/hero.mp4";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="grid  md:grid-cols-2  max-w-[1240px] mx-auto">
        {/* a searcbar here */}

        <div className="flex flex-col justify-center md:items-start w-full px-2 py-3">
          <input
            type="text"
            className=" w-full h-12 border-2 border-zinc-100 rounded-lg px-4 mt-4"
            placeholder="Search for anything"
          />
          <div className="mt-4">
            <p className="text-2xl">
              If you're like most designers and marketers, you search for
              illustrations in Google Images or on some stock image website.
              With us you get trendier, more professional, and better-matching
              illustrations that enhance your projects and bring visual harmony
              into the world.
            </p>
            <h1 className="py-3 text-5xl font-bold">Cloud management</h1>
            <button className="py-3 px-6 sm:w-[60%] my-4">get started</button>
          </div>
        </div>

        <div>
          <video autoPlay loop muted className="w-full h-full">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* <p className="bg-zinc-700">dsd</p> */}
      </div>
    </div>
  );
};
