import React from 'react'

function Knowledge() {
  return (
    <div className='w-4/5 flex flex-col gap-4  md:pl-1 md:bg-gray-950 md:flex md:flex-row md:gap-20 text-white text-xl md:text-lg '>
      
      <div className='w-4/5 md:w-1/2 flex flex-col gap-6 '>
          <h1 className='text-xl font-serif'>Knowledge</h1>
          <ul className='text-md flex flex-col gap-2 text-white font-thin'>
          <li className='flex gap-2 items-center'><i class="fa-sharp-duotone fa-solid fa-arrow-right"></i>JavaScript</li>
          <li className='flex gap-2 items-center'><i class="fa-sharp-duotone fa-solid fa-arrow-right"></i>node.js, Django</li>
          <li className='flex gap-2 items-center'><i class="fa-sharp-duotone fa-solid fa-arrow-right"></i>Tailwind, Bootstrap</li>
          <li className='flex gap-2 items-center'><i class="fa-sharp-duotone fa-solid fa-arrow-right"></i>SQL, MySql, Postgres</li>
          </ul>

      </div>
      <div className='w-4/5 md:w-1/2 flex flex-col gap-6'>
        <h1 className='text-xl font-serif'>Interest</h1>
        <ol className='text-md flex flex-col gap-2 text-white font-thin'>
            <li className='flex gap-2 items-center'><i class="fa-sharp-duotone fa-solid fa-arrow-right"></i>Create Web App</li>
            <li className='flex items-center gap-2'><i class="fa-sharp-duotone fa-solid fa-arrow-right"></i>Create E-commerce</li>
            <li className='flex items-center gap-2'><i class="fa-sharp-duotone fa-solid fa-arrow-right"></i>Create Business Websit</li>
            <li className='flex items-center gap-2'><i class="fa-sharp-duotone fa-solid fa-arrow-right"></i>Create Blogs And News Website</li>
        </ol>

      </div>
    </div>
  )
}

export default Knowledge
