import React from 'react'


const currentYear=new Date().getFullYear();
function Footer() {
  return (
    <div className='w-full h-32 bg-green text-white text-center'>
      <h1 className='text-xl text-500-800 font-bold'>Josue@{currentYear}</h1>
    </div>
  )
}

export default Footer
