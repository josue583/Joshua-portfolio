import React from 'react'
import Sidebar from '../components/Sidebar'
import joshua from "../assets/joshua.jpg"
import Myinformation from '../components/Myinformation.jsx/Myinformation'
// import Skills from '../components/skills.jsx'
import Progress_bar from '../components/Progress_bar'
import Knowledge from '../components/Knowledge'
import Experiance from '../components/Experiance'
import Footer from '../components/Footer'
function About() {
  return (
    <div className=' flex flex-col md:flex md:flex-row bg-gray-950'>
      <Sidebar/>
      <div className='w-full md:w-full bg-gray-950 md:bg-gray-950 md:ml-64   min-h-screen flex flex-col justify-center items-center gap-20 ' >
      <div className='w-4/5 min-h-screen text-white  flex flex-col mt-40 gap-6'>
      <div className='w-full mid:w-4/5 h-32 flex flex-col gap-2 text-gray-100'>
      <h1 className='w-20 h-8 bg-gray-700 font-bold text-center '>About</h1>
      <h2 className='text-white text-2xl font-bold'>About Me</h2>
      </div>
      
      <div className='w-full flex flex-col gap-6 '>
      <div className='w-full md:w-full '>
          <img className='w-full h-[600px]  md:w-full md:h-fit ' src={joshua} alt="" />
        </div>
        <div className='w-full'>
          <h1 className='text-2xl font-bold font-serif'>Ndikumwenayo Josue</h1>
          <p className='font-thin'>web Developer</p>
          
        </div>
        <hr className=''></hr>
        <div className='text-xl flex flex-col gap-8 text-white font-thin md:text-sm'>
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
          <button className=' w-full md:w-52 h-12 bg-white text-black font-serif'>Downloard CV</button>
        </div>
        
        </div>
       
      </div>
        
      
      </div>
      <Progress_bar/>
      <Knowledge/>
      <Experiance/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default About
