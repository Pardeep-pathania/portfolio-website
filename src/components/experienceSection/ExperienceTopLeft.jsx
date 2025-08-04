import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange-500 font-bold uppercase text-3xl font-special text-center'>Since 2024</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number="1" text="Year"/>
        <p className='font-bold text-6xl text-orange-900 mb-2'>-</p>
        <ExperienceInfo number="15" text="Projects"/>
      </div>
      <p className='text-center text-white'>
        With 1 year of experience building dynamic and user-friendly web application
      </p>
     
    </div>
  )
}

export default ExperienceTopLeft
