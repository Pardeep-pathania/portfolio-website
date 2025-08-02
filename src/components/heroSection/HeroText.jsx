import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan-500'>MERN Stack Web Developer</h2>
      <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold text-orange-500  '>Pardeep Singh Pathania</h1>
      <p className='text-lg mt-4 text-white'>
        A passionate Web Developer with 1 year of experience.
      </p>
    </div>
  )
}

export default HeroText
