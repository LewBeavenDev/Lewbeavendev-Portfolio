import React from 'react'
import Image from 'next/image'
import profilePic from '../public/LewBeavenBar.jpg'
import { motion } from "framer-motion"

const bounceAnimProps = () => ({
  whileHover: { scale: 1.1 },
  transition: { type: 'spring', stiffness: 300 }
});

const Navbar = () => {
  return (
    <nav className='w-screen h-20 bg-indigo-700 flex justify-between items-center'>
      <div className='flex items-center'>
        <div className='bg-slate-500 rounded-full border-4 border-indigo-300 flex items-center justify-center ml-10'>
          <Image src={profilePic} alt='Author Picture' className='h-10 w-10 rounded-full'/>
        </div>
        <ul className='flex justify-start gap-10 items-center pl-10'>
          <motion.div {...bounceAnimProps()}>
            <a href="#About">About</a>
          </motion.div>
          <motion.div {...bounceAnimProps()}>
            <a href="#Projects">Projects</a>
          </motion.div>
          <motion.div {...bounceAnimProps()}>
            <a href="#Skills">Skills</a>
          </motion.div>
          <motion.div {...bounceAnimProps()}>
            <a href="#Contact">Contact</a>
          </motion.div>

        </ul>
      </div>
      <motion.button
        className='h-10 w-44 rounded-3xl bg-indigo-300 mr-10'
        {...bounceAnimProps()}
        >
        Download CV
      </motion.button>
    </nav>
  );
}


export default Navbar