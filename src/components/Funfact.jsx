import React from 'react'

function Funfact(props) {
  return (
    <div className='w-full md:w-80 h-32 text-white border border-gray-200 flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold'>{props.funNumber}</h1>
      <p className='opacity-80'>{props.description}</p>
    </div>
  )
}

export default Funfact
