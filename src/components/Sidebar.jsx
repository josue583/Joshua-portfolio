import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import joshua from '../assets/joshua.JPG'


export default function sidebar() {
  const [isOpen,setIsOpen]=useState(false)
  return (

    <div className='md:w-64 md:min-h-screen bg-blue-950 md:pt-40 text-white flex-grow md:pl-16 gap-16 '>
      {/* w-full h-20  */}
      {/* pt-20 fixed left-0 top-0 */}

      <div className='w-full flex justify-between items-center h-20 bg-blue-950 md:hidden'>
        <h1 className='w-10 h-10 rounded-full text-white bg-gray-500 flex justify-center items-center ml-8 text-xl font-serif'>NJ</h1>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white mr-8">
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
   
<ul className='hidden  md:flex flex-col  gap-4 text-sm font-serif'>
<h1 className='w-10 h-10 rounded-full text-white bg-gray-500 flex justify-center items-center ml-8 text-xl font-serif'>NJ</h1>
        <li className='text-white font-bold text-xl'>DashBord</li>
        <Link to="/" className='flex gap-4'><i class="fa-solid fa-house"></i>Home</Link>
        <Link to="/about" className='flex gap-4'><i class="fa-solid fa-user"></i>About</Link>
        <Link to={"/contact"} className='flex gap-4'><i class="fa-solid  fa-gear"></i>Contact</Link>
        <li className='flex gap-4'><i class="fa-solid fa-envelope"></i>Service</li>
      </ul>
     </div>
{isOpen&&(
  <div className='w-36 fixed top-0 h-96 bg-blue-950 flex items-center justify-center  '>
 <ul className='flex flex-col  gap-4 text-md md:hidden'>
 <h1 className='w-10 h-10 rounded-full text-white bg-gray-500 flex justify-center items-center text-xl font-serif'>NJ</h1>
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


