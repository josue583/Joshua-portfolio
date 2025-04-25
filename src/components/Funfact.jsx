import React from 'react'

function Funfact(props) {
  return (
    <div className='w-full md:w-54 xl:w-72 h-32 text-white border border-gray-100 flex flex-col p-8 justify-center items-center opacity-80'>
      <h1 className='text-2xl font-bold'>{props.funNumber}</h1>
      <p className='opacity-80'>{props.description}</p>
    </div>
  )
}

export default Funfact
