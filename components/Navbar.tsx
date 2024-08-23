import React from 'react'
import Image from 'next/image'
import profilePic from '../public/LewBeavenBar.jpg'

const Navbar = () => {
  return (
    <nav className='w-screen h-20 bg-indigo-700 flex justify-between items-center'>
      <div className='flex items-center'>
        <a className='bg-slate-500 rounded-full border-4 border-indigo-300 hover:shadow-md hover:shadow-black flex items-center justify-center ml-10'><Image src={profilePic} alt='Author Picture' className='h-10 w-10 rounded-full'/>
        </a>
        <ul className='flex justify-start gap-10 items-center pl-10'>
          <a href="#About" className='hover:text-gray-200 hover:text-xl'>About</a>
          <a href="#Projects" className='hover:text-gray-200 hover:text-xl'>Projects</a>
          <a href="#Skills" className='hover:text-gray-200 hover:text-xl'>Skills</a>
          <a href="#Contact" className='hover:text-gray-200 hover:text-xl'>Contact</a>
        </ul>
      </div>
      <button className='h-10 w-44 rounded-3xl bg-indigo-300 mr-10 hover:shadow-md hover:shadow-black'>
        Download CV
      </button>
    </nav>
  );
}


export default Navbar