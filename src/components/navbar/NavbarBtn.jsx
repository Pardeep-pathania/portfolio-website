import React from 'react'
import { LuArrowRight } from 'react-icons/lu'

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl text-white border-cyan-500 border flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-orange-500 hover:border-orange-500 hover:scale-110 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500'>
      Hire Me
      <div className="sm:hidden md:block">
      <LuArrowRight/>
      </div>
    </button>
  )
}

export default NavbarBtn
