import React from 'react'
import Sidebar from '../components/Sidebar'
import MapComponent from '../components/Map'
import Footer from '../components/Footer'
import { delay, motion } from 'framer-motion'
function Contact() {
  return (
    
    <div
     
      className='flex flex-col xl:flex xl:flex-row bg-gray-950'>
        <Sidebar/>
        <motion.div 
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
          transition={{duration:0.6,ease:"easeOut"}}
        className='w-full xl:w-full pt-10 bg-gray-950 md:bg-gray-950 xl:ml-64 xl:pt-40   min-h-screen flex flex-col justify-center items-center gap-20  '>
        <div className='w-4/5 min-h-screen flex flex-col gap-10'>
        <div className='w-1/2  flex flex flex-col gap-6'>
          <h1 className='w-20 h-8 bg-gray-700 font-bold text-center text-white '>Contact</h1>
          <h1 className='text-xl text-white'>Contact Me</h1>
          </div>
          <div className='w-full'>
          <MapComponent/>
          </div>
          
          <div>
            <form className='flex flex-col gap-6 ' action="">
              <motion.input
              initial={{opacity:0,x:-50}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.4,delay:0.2}}
               className='w-full h-10 border border-gray-400 pl-2 text-white font-bold' type="text" placeholder='Name' />
              <motion.input
              initial={{opacity:0,x:-50}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.4,delay:0.2}}
               className='w-full h-10 border border-gray-400 pl-2 text-white font-bold' type="text" placeholder='Email' />
              <motion.extarea
              initial={{opacity:0,x:-50}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.4,delay:0.2}}
               className='w-full h-18 border border-gray-400 pl-2 text-white font-bold' type="text" placeholder='Message' />
              
            </form>
          </div>
          <div className=''>
             <motion.button 
             whileHover={{scale:1.05}}
             whileTap={{sclae:0.95}}
             transition={{type:"spring",stiffness:300}}
             className='w-full h-10 bg-white text-black border border-gray-300 font-bold md:w-36'>Send Message</motion.button>
          </div>
          <Footer/>
        </div>
         
        
        </motion.div>
      
     
    </div>
  )
}

export default Contact
