import React, { useState } from "react";
import { Bars2Icon } from "@heroicons/react/20/solid";
function Navbar() {
  const [nav, seNav] = useState(false);
  const handleCLick = () => seNav(!nav);

  return (
    <div className="w-screen  h-[50px] z-10 ">
      <div className="px2 flex justify-between items-center w-full h-full">
        <div className="px-2 flex items-center">
          <h2 className="text-2xl font-bold ml-4 sm:text-4xl z-12 drop-shadow-md">
            CloudM
          </h2>

          <ul className="hidden md:flex items-center space-x-4 ml-20">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="border-none bg-transparent mr-4 text-black">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div className="md:hidden" onClick={handleCLick}>
          {!nav ? <Bars2Icon className="w-7" /> : <span>x</span>}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full  px-8"}>
        <li className="border-b-2 border-zinc-300">Home</li>
        <li className="border-b-2 border-zinc-300">About</li>
        <li className="border-b-2 border-zinc-300">Support</li>
        <li className="border-b-2 border-zinc-300">Platforms</li>
        <li className="border-b-2 border-zinc-300">Pricing</li>

        <div className="flex flex-col my-4">
          <button className="mb-4 border-none bg-transparent mr-4 text-black">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
