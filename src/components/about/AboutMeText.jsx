import React from 'react'

const AboutMeText = () => {
  return (
     <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center text-white">
      <h2 className="text-6xl text-cyan-500 mb-10">About Me</h2>
      <p>
        I’m Pardeep, a web developer with a passion for coding. I specialize in React and front-end development and Backend development, and build real-world projects with modern web technologies. Outside of coding, I enjoy continuous learning and
        sharing knowledge to inspire others to achieve their goals.
      </p>

        <button className="border border-orange-400
         rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange-500 transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        {/* <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        > */}
          My Projects
        {/* </Link> */}
      </button>

    </div>
  )
}

export default AboutMeText
