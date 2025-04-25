import React from 'react'
import Sidebar from '../components/Sidebar'
import joshua from "../assets/joshua.jpg"
import Myinformation from '../components/Myinformation.jsx/Myinformation'
// import Skills from '../components/skills.jsx'
import Progress_bar from '../components/Progress_bar'
import Knowledge from '../components/Knowledge'
import Experiance from '../components/Experiance'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className=' flex flex-col xl:flex xl:flex-row bg-gray-950'>
      <Sidebar/>
      <motion.div
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.6,ease:"easeOut"}}
      
      className='w-full xl:w-full bg-[#121212ff] xl:bg-[#121212ff] xl:ml-64   min-h-screen flex flex-col justify-center items-center gap-20 ' >
      <div className='w-4/5 min-h-screen text-white  flex flex-col mt-40 gap-6'>
      <div className='w-full mid:w-4/5 h-32 flex flex-col gap-2 text-gray-100'>
      <h1 className='w-20 h-8 bg-gray-700 font-bold text-center '>About</h1>
      <h2 className='text-white text-2xl font-extrabold'>About Me</h2>
      </div>
      
      <div className='w-full flex flex-col gap-6 '>
      <div className='w-full xl:w-full '>
          <img className='w-full h-[600px]  xl:w-full xl:h-fit ' src={joshua} alt="" />
        </div>
        <div className='w-full'>
          <h1 className='text-2xl font-bold font-serif'>Ndikumwenayo Josue</h1>
          <p className='font-thin'>web Developer</p>
          
        </div>
        <hr className=''></hr>
        <div className='text-xl flex flex-col gap-8 text-white font-thin xl:text-sm'>
          <div>Hi, my name is Ndikumwenayo Josue and i began using React and node.js at the first time decided to be full stack developer. i've spent more time with building 
          the complex web application in react and node.js severous years.</div>
          <div>i'm one specialised receiving idea from the client, analysing them from scratch and implent that project in needed software.i can go far building standing static website building dynamic software that can let 
          the customer or user making the change to the data anytime.</div>
          
        </div>
        <hr className=''></hr>
        <Myinformation/>
        <hr />
        <div>
          
        </div>
        <div className='flex flex-col gap-32'>
        <div className='pt-10'>
          <button className=' w-full xl:w-52 h-12 bg-white text-black font-serif'>Downloard CV</button>
        </div>
        
        </div>
       
      </div>
        
      
      </div>
      <Progress_bar/>
      <Knowledge/>
      <Experiance/>
      <Footer/>
      </motion.div>
      
    </div>
  )
}

export default About
