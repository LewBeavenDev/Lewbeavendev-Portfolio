import React from 'react';
import ParticlesComponent from './Particles';
import profilePic from '../public/LewBeavenBar.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const nameText = "Lewis Beaven".split(" ");

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col-reverse md:flex-row items-center px-10">
      {/* Background particles */}
      <div className="absolute inset-0 -z-10">
        <ParticlesComponent />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center ml-0 space-y-5 z-10 text-center lg:ml-32 md:text-left md:ml-0 sm:text-center sm:ml-0">
        {nameText.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5,
              delay: i / 2,
            }}
            key={i}
            className="text-white font-bold text-5xl md:text-7xl lg:text-9xl">{el}{" "}
          </motion.span>
        ))}
        <motion.h2 
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 1, delay:1, type: 'spring', stiffness: 300 }}
          className="text-xl md:text-2xl font-semibold text-white">
          Creative Junior Front End Developer Turning Ideas into Code.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 1, delay:1.5, type: 'spring', stiffness: 300 }}
          className="text-slate-300 font-medium text-md lg:w-2/3 md:text-xl">
          With a unique background in engineering and hospitality, I blend creativity with technical
          skills to build functional and engaging web applications.
        </motion.p>
      </div>

      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
      }}
        className="z-10 flex justify-center mb-10 md:mb-0 shrink-0">
        <Image
          src={profilePic}
          alt="Lewis Beaven Profile Picture"
          className="rounded-full"
          width={288}
          height={288}
          priority
        />
      </motion.div>
      <div></div>
    </div>
  );
};

export default Hero;
