import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-screen h-18 bg-indigo-700 flex justify-center items-center'>
        <a className='size-10 flex-shrink-0 bg-slate-500 ml-10 rounded-full z-10 border-4 border-indigo-300 hover:shadow-md hover:shadow-black' ></a>
        <ul className='flex justify-start gap-10 items-center w-screen h-14 pl-44'>
            <a href="#About" className='hover:text-gray-200 hover:text-xl'>About</a>
            <a href="#Projects" className='hover:text-gray-200 hover:text-xl'>Projects</a>
            <a href="#Skills" className='hover:text-gray-200 hover:text-xl'>Skills</a>
            <a href="#Contact" className='hover:text-gray-200 hover:text-xl'>Contact</a>
        </ul>
        <button className='h-10 w-44 rounded-3xl bg-indigo-300 mr-10 hover:shadow-md hover:shadow-black'>Download CV</button>
    </nav>
  )
}

export default Navbar