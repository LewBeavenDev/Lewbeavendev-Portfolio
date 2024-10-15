import React from "react";
import Skateshack from "../public/Skateshack.png";
import Hol from "../public/HoL.png";
import CocktailCompanion from "../public/CocktailCompanion.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-3/4 max-w-6xl mt-20 bg-indigo-700 py-8 flex flex-col items-center rounded-xl mb-4">
        <div className="flex justify-center text-center text-4xl font-bold">
          <h2 className="">Projects</h2>
        </div>
        <div className="w-full px-4 mt-10">
          <div className="p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl">
            <div className="-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg">
              <h3 className="m-2 text-2xl font-bold tracking-tight">
                SkateShack
              </h3>
            </div>
            <div className="flex items-center flex-col ">
              <Image
                className="flex"
                src={Skateshack}
                alt="Mockup of Skateshack Website"
              ></Image>
              <p className="flex font-normal text-slate-300 mt-2">
                Skate Shack is a Static website for an imaginary indoor
                Skatepark with accompanying cafe. The website is designed to
                give information about the venue and experiences on offer. Skate
                Shack has information allowing users to find out opening times,
                event schedules, location, cafe offerings and bookable sessions.
              </p>
              <p className="mt-2">
                <Link
                  href="https://lewbeavendev.github.io/SkateShack2.0/"
                  target="_blank"
                >
                  SkateShack Live Link
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 mt-10">
          <div className="p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl">
            <div className="-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg">
              <h3 className="m-2 text-2xl font-bold tracking-tight">
                Higher or Lower Game
              </h3>
            </div>
            <div className="flex items-center flex-col ">
              <Image
                className="flex"
                src={Hol}
                alt="Mockup of Higher or Lower Website"
              ></Image>
              <p className="flex font-normal text-slate-300 mt-2">
                Higher or Lower is a card game where you guess whether the next
                card is higher or loer than the one you are shown. The player
                can bet points to try and get the highest score possible.
              </p>
              <p className="mt-2">
                <Link
                  href="https://lewbeavendev.github.io/Higher_or_Lower/"
                  target="_blank"
                >
                  Higher or Lower Live Link
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 mt-10">
          <div className="p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl">
            <div className="-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg">
              <h3 className="m-2 text-2xl font-bold tracking-tight">
                Cocktail Companion
              </h3>
            </div>
            <div className="flex items-center flex-col ">
              <Image
                className=""
                src={CocktailCompanion}
                alt="Mockup of Higher or Lower Website"
              ></Image>
              <p className="flex font-normal text-slate-300 mt-2">
                This site is a helper for all mixologists out there designing
                and creating their own drinks. It provides a database of classic
                cocktails with images and specs. Upon signing up and loging in
                it allows the users to create, read, update and delete their own
                cocktails.
              </p>
              <p className="mt-2">
                <Link
                  href="https://lewbeavendev.github.io/Higher_or_Lower/"
                  target="_blank"
                >
                  Cocktail Companion Live Link
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
