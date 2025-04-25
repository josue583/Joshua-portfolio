import React from 'react'

 function Card(props) {
  return (
    <div className=' w-full pr-10 md:w-66 h-86 text-white bg-[#2f2f30ff] flex flex-col gap-6 xl:w-64 p-8 hover:scale-105 hover:shadow-2xl group'>
      <h1 className='w-12 h-12 bg-[#3b3b3bff] font-extrabold text-md flex justify-center items-center rounded-full'>{props.cardNo}</h1>
      <h2 className=' font-extrabold'>{props.cardTitle}</h2>
      <p className='font-thin text-md'>{props.content}</p>
      <button className='flex items-center group'><span className='opacity-0 invisible group-hover:opacity-100 group-hover:visible transition py-4 px-2'>Read More</span><hr className='w-8 mt-2 ml-0' /></button>
    </div>
  )
}

export default Card;
