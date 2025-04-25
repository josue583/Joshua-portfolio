import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import joshua from '../assets/joshua.JPG'

import { motion } from 'framer-motion'
export default function sidebar() {
  const [isOpen,setIsOpen]=useState(false)
  return (

    <div className='xl:w-64 xl:min-h-screen xl:fixed lg:left-0 xl:top-0 bg-[#000000ff] xl:pt-40 text-white flex-grow xl:pl-16 gap-16 '>
      {/* w-full h-20  */}
      {/* pt-20 fixed left-0 top-0 */}

      <div className='w-full  flex justify-between items-center h-18 bg-[#3b3b3bff] xl:hidden'>
        <h1 className='w-10 h-10 rounded-full text-white bg-[#000000ff] flex justify-center items-center ml-8 text-xl font-extrabold'>NJ</h1>
      <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-white mr-8">
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
         
      </div>
     <div>
   
<ul className=' hidden xl:flex flex-col  gap-8 text-sm font-serif'>
<h1 className='w-10 h-10 rounded-full text-white bg-[#3b3b3bff] flex justify-center items-center ml-8 text-xl font-serif'>NJ</h1>
        <li className='text-white font-bold text-lg'>DashBord</li>
        <Link to="/" className='flex gap-4'><i class="fa-solid fa-house"></i>Home</Link>
        <Link to="/about" className='flex gap-4'><i class="fa-solid fa-user"></i>About</Link>
        <Link to="/contact" className='flex gap-4'><i class="fa-solid  fa-gear"></i>Contact</Link>
        <Link to="/service" className='flex gap-4'><i class="fa-solid fa-envelope"></i>Service</Link>
      </ul>
     </div>
{isOpen&&(
  <div className='w-64 fixed top-0 min-h-screen bg-[#000000ff] flex flex-col gap-12 pl-10 pt-20 xl:hidden '>
    <h1 className='w-10 h-10 rounded-full text-white bg-[#3b3b3bff] flex justify-center items-center font-extrabold ml-6'>NJ</h1>
 <ul className='flex flex-col gap-6 text-md xl:hidden'>

        <Link to="/" className='flex gap-2 font-thin'><i class="fa-solid fa-house"></i>Home</Link>
        <Link to="/about" className='flex gap-2 font-thin'><i class="fa-solid fa-user"></i>About</Link>
        <Link to="/contact" className='flex gap-2 font-thin'><i class="fa-solid  fa-gear"></i>Contact</Link>
        <Link to="/service" className='flex gap-4 font-thin'><i class="fa-solid fa-envelope"></i>Services</Link>
      </ul>
  </div>
     
)}

      

    </div>
  )
}


