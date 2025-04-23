import React from 'react'
import Sidebar from '../components/Sidebar'
import MapComponent from '../components/Map'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
function Contact() {
  return (
    
    <div
     
      className='flex flex-col md:flex md:flex-row bg-gray-950'>
        <Sidebar/>
        <motion.div 
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
          transition={{duration:0.6,ease:"easeOut"}}
        className='w-full md:w-full pt-10 bg-gray-950 md:bg-gray-950 md:ml-64 md:pt-40   min-h-screen flex flex-col justify-center items-center gap-20  '>
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
              <input className='w-full h-10 border border-gray-400 pl-2 text-white font-bold' type="text" placeholder='Name' />
              <input className='w-full h-10 border border-gray-400 pl-2 text-white font-bold' type="text" placeholder='Email' />
              <textarea className='w-full h-18 border border-gray-400 pl-2 text-white font-bold' type="text" placeholder='Message' />
              
            </form>
          </div>
          <div className=''>
             <button className='w-full h-10 bg-white text-black border border-gray-300 font-bold md:w-36'>Send Message</button>
          </div>
          <Footer/>
        </div>
         
        
        </motion.div>
      
     
    </div>
  )
}

export default Contact
