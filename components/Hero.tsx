import React from 'react';
import ParticlesComponent from './Particles';
import profilePic from '../public/LewBeavenBar.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col-reverse md:flex-row items-center px-10">
      {/* Background particles */}
      <div className="absolute inset-0 -z-10">
        <ParticlesComponent />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center space-y-5 z-10 text-center md:text-left">
        <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-9xl">Lewis Beaven.</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Creative Junior Front End Developer Turning Ideas into Code.
        </h2>
        <p className="text-slate-300 font-medium text-lg lg:w-2/3 md:text-xl">
          With a unique background in engineering and hospitality, I blend creativity with technical
          skills to build functional and engaging web applications.
        </p>
      </div>

      {/* Profile Picture */}
      <div className="z-10 flex justify-center mb-10 md:mb-0">
        <Image
          src={profilePic}
          alt="Lewis Beaven Profile Picture"
          className="rounded-full"
          width={288}
          height={288}
          priority
        />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
