import React from 'react'

const Skills = () => {
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
                Skills and Tech Stack
              </h3>
            </div>
            <div className="flex items-center flex-col ">
              <p>Hello skills</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills