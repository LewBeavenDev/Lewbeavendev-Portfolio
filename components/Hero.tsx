import React from 'react'
import ParticlesComponent from './Particles';



const Hero = () => {
  return (
    <div>
      <div className='-z-10 absolute w-screen h-screen flex items-center justify-start pl-40' style={{marginTop: -80}}>
        <ParticlesComponent />
        <div className='pt-20 flex flex-col  h-40 w-120 absolute '>
          <h1 className='text-white font-bold text-9xl'>Lewis Beaven</h1>
          <p className='pl-2 text-xl font-semibold'>Modern websites made easy</p>
        </div>
      </div>
      
    </div>
  )
}

export default Hero