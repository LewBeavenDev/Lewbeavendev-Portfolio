import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

        <div className='w-3/4 max-w-6xl mt-20 bg-indigo-700 py-8 flex flex-col items-center rounded-xl mb-4'>
            <div className='flex justify-center text-center text-4xl font-bold'>
                <h2 className=''>
                    About Me
                </h2>
            </div>
            <div className='w-full px-4 mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                
                <div className='p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl'>
                <div className='-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg'>
                    <h3 className='m-2 text-2xl font-bold tracking-tight'>
                        Introduction:
                    </h3>
                </div>
                    <p className='font-normal text-slate-300 mt-2'>
                        Hi, I am Lewis Beaven, a Junior Full Stack Developer based in Brackley, UK. After an exciting career in the Navy and a creative stint in hospitality, I discovered my passion for coding and problem-solving. My journey has equipped me with a unique blend of creativity, technical expertise, and team-oriented work ethic.
                    </p>
                </div>


                <div className='p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl'>
                    <div className='-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg'>
                        <h3 className='m-2 mb-2 text-2xl font-bold tracking-tight'>
                            Experience Overview:
                        </h3>
                    </div>
                    <p className='font-normal text-slate-300 mt-2'>
                        I am currently pursuing a Level 5 Diploma in Full Stack Software Development from the Code Institute. My technical skills span HTML, CSS, JavaScript, and Python, with experience in frameworks like Flask and Django. My previous roles in engineering and hospitality have honed my problem-solving abilities and fostered a deep appreciation for teamwork.
                    </p>
                </div>

                <div className='p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl'>
                    <div className='-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg'>
                        <h3 className='m-2 mb-2 text-2xl font-bold tracking-tight'>
                            Personal Interests:
                        </h3>
                    </div>
                    <p className='font-normal text-slate-300 mt-2'>
                        Beyond coding, I am passionate about graphic design, gaming, and music production. I enjoy running Dungeons and Dragons campaigns, experimenting with electronic music, and continually expanding my design skills with tools like Figma.
                    </p>
                </div>

                <div className='p-6 bg-indigo-900 border border-indigo-900 rounded-lg hover:shadow-xl'>
                    <div className='-mt-6 -mx-6 bg-indigo-950 p-4 rounded-t-lg'>
                        <h3 className='m-2 mb-2 text-2xl font-bold tracking-tight'>
                            Mission Statement:
                        </h3>
                    </div>
                    <p className='font-normal text-slate-300 mt-2'>
                        My goal is to continuously evolve as a developer, leveraging my diverse background to create innovative and user-centric web experiences.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
