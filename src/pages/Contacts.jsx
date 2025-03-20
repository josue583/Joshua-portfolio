import React from 'react'
import Sidebar from '../components/Sidebar'
import MapComponent from '../components/Map'
import Footer from '../components/Footer'
function Contact() {
  return (
    <div className='flex ml-34 bg-gray-950'>
        <Sidebar/>
        <div className='w-full min-h-screen bg-gray-950 text-white flex pt-32 justify-center  '>
        <div className='w-4/5 min-h-screen flex flex-col gap-10 ml-16'>
        <div className='w-1/2  flex flex flex-col gap-6'>
          <h1 className='w-20 h-8 bg-gray-700 font-bold text-center '>Contact</h1>
          <h1 className='text-xl'>Contact Me</h1>
          </div>
          <div className='w-full'>
          <MapComponent/>
          </div>
          
          <div>
            <form className='flex flex-col gap-6' action="">
              <input className='w-full h-10 border border-gray-400 pl-2' type="text" placeholder='name' />
              <input className='w-full h-10 border border-gray-400 pl-2' type="text" placeholder='Email' />
              <textarea className='w-full h-18 border border-gray-400 pl-2' type="text" placeholder='Message' />
              
            </form>
          </div>
          <div className=''>
             <button className='w-full h-10 bg-white text-black border border-gray-300 font-bold md:w-36'>Send Message</button>
          </div>
          <Footer/>
        </div>
         
        
        </div>
      
     
    </div>
  )
}

export default Contact
