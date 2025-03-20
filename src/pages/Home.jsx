import React from 'react'
import Sidebar from '../components/Sidebar'
import joshua from '../assets/joshua.JPG'
import { TypeAnimation } from 'react-type-animation'
function Home() {
  return (
    <div className='w-full min-h-[100dvh]  md:min-h-screen flex gap-0'>
      <Sidebar/>
      <div className='w-full p-4  ml-20  flex flex-col items-center pl-32 justify-center bg-gray-950 md:4/5:flex md:flex-row sm:items-center sm:justify-center bg-gray-950 min-h-screen text-white    gap-10'>
        <div className='w-60'>
         <img className='w-56 h-68 rounded-full border-t-transparent animate-spin-slow' src={joshua} alt="" />
        </div>
        <div className='md:w-2/5 text-md  md:text-xl flex flex-col gap-6'>
           <h1 className='text-xl md:text-4xl'>NDIKUMWENAYO JOSUE</h1>
           <h2 className='text-lg md:text-lg'> <TypeAnimation
        sequence={["Software Dev", 1000, "Welcome to my portfolio!", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      /></h2>
           <p className=' w-4/5 text-sm md:text-lg space-y-60'>i am software developer passionate to provide good software design and that can let the user interact with server</p>
           <div className='flex gap-5 '>
        <i class="fa-brands text-white fa-facebook-f"></i>
        <i class="fa-brands text-white fa-instagram"></i>
        <i class="fa-brands text-white fa-linkedin-in"></i>
        <i class="fa-brands text-white fa-twitter"></i>
        </div>
        </div>
       
      </div>
      
    
    </div>
  )
}

export default Home
