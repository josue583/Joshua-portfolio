import React from 'react'
import Sidebar from '../components/Sidebar'
import joshua from '../assets/joshua.jpg'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
function Home() {
  return (
    <div className='w-full flex flex-col xl:flex xl:flex-row  xl:min-h-screen'>
      <Sidebar/>
      <motion.div
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.6,ease:"easeOut"}}
       className='w-full min-h-screen flex flex-col items-center gap-16 bg-[#121212ff] pt-12 xl:flex xl:flex-row xl:bg-[#121212ff] xl:justify-center xl:pl-60 min-h-screen text-white'>
        <div className='w-72 h-96'>
         <img className='w-76 h-96 rounded-full border-t-transparent animate-spin-slow' src={joshua} alt="" />
        </div>
        <div className='w-4/5 flex flex-col items-center xl:w-2/5  xl:text-xl xl:items-start gap-6 '>
           <h1 className='text-xl xl:text-4xl font-extrabold'>JOSUE NDIKUMWENAYO</h1>
           <h2 className='text-2xl'> <TypeAnimation
        sequence={["Software Dev", 1000, "Welcome to my portfolio!", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      /></h2>
           <p className=' w-4/5 text-md xl:text-xl space-y-60 text-[#a3a3a3ff] xl:w-full bg-green-400 '>I am software developer passionate to provide good software design and that can let the user interact with server</p>
           <div className='flex gap-5 h-32 '>
           <i class="fa-brands text-white fa-facebook-f"></i>
           <i class="fa-brands fa-twitter"></i>
           <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands text-white fa-linkedin-in"></i>
        <i class="fa-brands fa-tiktok"></i>
       
        </div>
        </div>
       
      </motion.div>
      
    
    </div>
  )
}

export default Home
