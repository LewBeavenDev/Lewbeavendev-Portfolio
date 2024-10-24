import React, { useState } from 'react';
import Image from 'next/image';
import profilePic from '../public/LewBeavenBar.jpg';
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

const bounceAnimProps = () => ({
  whileHover: { scale: 1.1 },
  transition: { type: 'spring', stiffness: 300 }
});

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='w-full h-20 bg-indigo-700 fixed top-0 left-0 z-50 flex justify-between items-center px-4 md:px-10'>
      <div className='flex items-center'>
        <div className='bg-slate-500 rounded-full border-4 border-indigo-300 flex items-center justify-center'>
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <Image src={profilePic} alt='Author Picture' className='h-10 w-10 rounded-full' />
        </Link>
        </div>
      </div>

      <ul className={`fixed top-20 right-0 w-full bg-indigo-700 flex flex-col items-center gap-6 py-4 text-white transition-transform duration-300 md:static md:flex md:flex-row md:w-auto md:py-0 md:bg-transparent md:text-white md:gap-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
        <motion.div {...bounceAnimProps()}>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMobileMenu}>About</Link>
        </motion.div>
        <motion.div {...bounceAnimProps()}>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMobileMenu}>Projects</Link>
        </motion.div>
        <motion.div {...bounceAnimProps()}>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMobileMenu}>Contact</Link>
        </motion.div>
      </ul>

      <motion.button
        className='hidden md:block h-10 w-36 rounded-3xl bg-indigo-300 text-indigo-700 font-semibold'
        {...bounceAnimProps()}
      >
        Download CV
      </motion.button>

      <div className='flex md:hidden'>
        <button className='text-white' onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
