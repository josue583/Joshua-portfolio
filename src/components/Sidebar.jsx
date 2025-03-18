import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import joshua from '../assets/joshua.JPG'


export default function sidebar() {
  const [isOpen,setIsOpen]=useState(false)
  return (

    <div className='w-36 h-screen pt-20 fixed left-0 top-0  md:w-52 md:min-h-full bg-black text-white  flex flex-col flex-grow pl-6 md:pl-16 gap-16 '>
      {/* <div className='w-8 h-8 raund-full'> <img className='w-8 h-8 rounded-full border-t-transparent animate-spin-slow' src={joshua} alt="" /></div> */}

     <div>
     <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
  {isOpen ? (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg> // Close Icon
  ) : (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg> // Hamburger Icon
  )}
</button>


<ul className='hidden  md:flex flex-col  gap-4 text-sm font-serif'>
        <li className='text-white font-bold text-xl'>DashBord</li>
        <Link to="/" className='flex gap-4'><i class="fa-solid fa-house"></i>Home</Link>
        <Link to="/about" className='flex gap-4'><i class="fa-solid fa-user"></i>About</Link>
        <Link to={"/contact"} className='flex gap-4'><i class="fa-solid  fa-gear"></i>Contact</Link>
        <li className='flex gap-4'><i class="fa-solid fa-envelope"></i>Service</li>
      </ul>
     </div>
{isOpen&&(
  <div className='w-20 min-h-screen '>
 <ul className='flex flex-col  gap-4 text-sm md:hidden'>
        <li className='text-xl font-bold'>Dashboard</li>
        <Link to="/" className='flex gap-4 font-thin'><i class="fa-solid fa-house"></i>Home</Link>
        <Link to="/about" className='flex gap-4 font-thin'><i class="fa-solid fa-user"></i>About</Link>
        <Link to="/contact" className='flex gap-4 font-thin'><i class="fa-solid  fa-gear"></i>Contact</Link>
        <li className='flex gap-4 font-thin'><i class="fa-solid fa-envelope"></i>Services</li>
      </ul>
  </div>
     
)}

      

    </div>
  )
}


