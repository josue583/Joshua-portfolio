import React from 'react'
import Sidebar from '../components/Sidebar'
import joshua from '../assets/joshua.jpg'
import { TypeAnimation } from 'react-type-animation'
function Home() {
  return (
    <div className='w-full flex flex-col md:flex md:flex-row  md:min-h-screen'>
      <Sidebar/>
      <div className='w-full min-h-screen flex flex-col items-center bg-[#121212ff] pt-12 md:flex md:flex-row md:bg-[#121212ff] md:justify-center md:pl-60 min-h-screen text-white'>
        <div className='w-60'>
         <img className='w-40 h-52 rounded-full border-t-transparent animate-spin-slow' src={joshua} alt="" />
        </div>
        <div className='w-full flex flex-col items-center md:w-2/5 text-md  md:text-xl md:items-start gap-6 '>
           <h1 className='text-4xl md:text-4xl font-extrabold'>JOSUE NDIKUMWENAYO</h1>
           <h2 className='text-2xl'> <TypeAnimation
        sequence={["Software Dev", 1000, "Welcome to my portfolio!", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      /></h2>
           <p className=' w-4/5 text-lg md:text-lg space-y-60 text-[#a3a3a3ff] '>I am software developer passionate to provide good software design and that can let the user interact with server</p>
           <div className='flex gap-5 '>
           <i class="fa-brands text-white fa-facebook-f"></i>
           <i class="fa-brands fa-twitter"></i>
           <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands text-white fa-linkedin-in"></i>
        <i class="fa-brands fa-tiktok"></i>
       
        </div>
        </div>
       
      </div>
      
    
    </div>
  )
}

export default Home
