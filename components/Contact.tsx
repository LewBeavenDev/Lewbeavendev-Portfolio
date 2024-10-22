import React from 'react'
import Link from "next/link";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-3/4 max-w-6xl mt-20 bg-indigo-700 py-8 flex flex-col items-center rounded-xl mb-4">
        <div className="flex justify-center text-center text-4xl font-bold">
          <h2 className="">Contact</h2>
        </div>
        <div className="w-full px-4 mt-10">
          <div className="p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl">
            <div className="-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg">
              <h3 className="m-2 text-2xl font-bold tracking-tight">
                Email
              </h3>
            </div>
            <div className="flex items-center flex-col mt-4">
              <p className="m-2 text-2xl tracking-tight">
                Feel free to email me about anything, from work/hiring to general questions about anything I have done! 
              </p>
              <Link
                  href="mailto:lewbeavendev@gmail.com"
                  target="_blank"
                >lewbeavendev@gmail.com
              </Link>
            </div>
          
          </div>
        </div>
        <div className="w-full px-4 mt-10">
          <div className="p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl">
            <div className="-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg">
              <h3 className="m-2 text-2xl font-bold tracking-tight">
                Github
              </h3>
            </div>
            <div className="flex items-center flex-col mt-4">
            <p className="m-2 text-2xl tracking-tight">
                My Github where I upload and share every project I have worked on to date! 
              </p>
              <Link
                  href="https://github.com/LewBeavenDev"
                  target="_blank"
                >Github Link
              </Link>
            </div>
          
          </div>
        </div>
        <div className="w-full px-4 mt-10">
          <div className="p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl">
            <div className="-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg">
              <h3 className="m-2 text-2xl font-bold tracking-tight">
                UpWork
              </h3>
            </div>
            <div className="flex items-center flex-col mt-4">
              <p className="m-2 text-2xl tracking-tight">
                Hit me up on here for any Freelance work! 
              </p>
              <Link
                  href="https://www.upwork.com/freelancers/~01dced48be4d4f7e87"
                  target="_blank"
                >UpWork Link
              </Link>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills