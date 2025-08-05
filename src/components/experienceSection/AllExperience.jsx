import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import SingleExperience from './SingleExperience'

const experiences = [
  {
    job: 'Python Developer Intern',
    company: "Future Finders",
    date: "July 2023 - August 2023",
    responsibility:[
       "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ]
  },

    {
    job: 'MERN Stack Developer Intern',
    company: "ThinkNext Technologies",
    date: "Feb 2025 - July 2025 ",
    responsibility:[
       "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ]
  }
]

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-around'>
      {
        experiences.map((experience, index)=>{
          return <>
            <SingleExperience key={index} experience= {experience} />
            {index<1 ? (<FaArrowRightLong className="text-6xl text-orange-500 lg:block sm:hidden"/>) : ("") }
          </>
        })
      }
    </div>
  )
}

export default AllExperience
