import React from 'react'
import { Progress } from '@material-tailwind/react'
function Progress_bar() {
  return (
    <div className='w-4/5 flex justify-center min-h-[600px] md:w-full md:ml-34 md:min-h-[400px]  bg-black flex text-white md:flex md:flex-row md:items-center md:justify-start '>
      <div className='w-4/5 flex flex-col justify-center pt-4 md:w-4/5 md:flex md:flex-row md:justify-start md:ml-12 md:gap-40 font-bold'>
      <div className=' w-full flex flex-col gap-4 md:w-2/5'>
      <h1 className='pb-10 font-bold text-xl font-serif'>Programming Skills</h1>
      <div className='w-full flex flex-col gap-2 md:w-full '>
      <div className='w-full flex justify-between text-sm font-serif'>
        <h1>Java Script</h1>
        <h1>80%</h1>
      </div>
      <div className='w-full md:w-full h-1 bg-gray-700'>
       <div className=' w-4/5 md:w-4/5 h-1 bg-gray-500 text-xs flex justify-center items-center'></div>
      </div>
      </div>
      <div className='w-full flex flex-col gap-2 md:w-full'>
      <div className='w-full flex justify-between text-sm font-serif'>
        <h1>Node.js</h1>
        <h1>75%</h1>
      </div>
      <div className='w-full h-1 bg-gray-700 '>
       <div className='w-3/4 h-1 bg-gray-500 text-xs flex justify-center items-center'></div>
      </div>
      </div>
      <div className='w-full flex flex-col gap-2 md:w-full'>
      <div className='w-full flex justify-between text-sm font-serif'>
        <h1>Python</h1>
        <h1>90%</h1>
      </div>
      <div className='w-full h-1 bg-gray-700 '>
       <div className='w-4/5 h-1 bg-gray-500 text-xs flex justify-center items-center'></div>
      </div>
      </div>
      
      
      </div>
      <div className=' w-full md:w-2/5  flex flex-col gap-4'>
      <h1 className='pb-10 font-bold text-xl font-serif'>Language Skills</h1>
      <div className='w-full flex flex-col gap-2 md:w-full '>
      <div className='w-full flex justify-between text-sm font-serif'>
        <h1>English</h1>
        <h1>80%</h1>
      </div>
      <div className='w-full h-1 bg-gray-700'>
       <div className='w-4/5 h-1 bg-gray-500 text-xs flex justify-center items-center'></div>
      </div>
      </div>
      <div className='w-full flex flex-col gap-2 md:w-full'>
      <div className='w-full flex justify-between text-sm font-serif'>
        <h1>Kiswahiki</h1>
        <h1>50%</h1>
      </div>
      <div className='w-full h-1 bg-gray-700 md:w-full '>
       <div className='w-1/2 h-1 bg-gray-500 flex justify-center items-center'></div>
      </div>
      </div>
      <div className='w-full flex flex-col gap-2 md:w-full'>
      <div className='w-full flex justify-between text-sm font-serif'>
        <h1>Kinyarwanda</h1>
        <h1>95%%</h1>
      </div>
      <div className='w-full h-1 bg-gray-700 '>
       <div className='w-4/5 h-1 bg-gray-500 text-xs flex justify-center items-center'></div>
      </div>
      </div>
      
      
      </div>

      </div>
      
      
    </div>
  )
}

export default Progress_bar
