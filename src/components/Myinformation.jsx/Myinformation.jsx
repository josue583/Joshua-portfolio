import React from 'react'

function Myinformation() {
  return (
    <div className='w-full'>
      <table className='w-full flex flex-col md:flex md:flex-row justify-between'>
       
            <div className='flex flex-col gap-4'>
            <div className=''>
            <tr className='flex gap-10'>
                <td className='font-bold'>Name:</td>
                <td className=' text-md font-thin'>Ndikumwenayo Josue</td>
                
            </tr>
        </div>
        <div>
        <tr className='flex gap-12'>
                <td className='font-bold'>email:</td>
                <td className=' text-md font-thin'>ndikumwenayojosue@gmail.com</td>
            </tr>
        </div>
        <div>
        <tr className='flex gap-8'>
                <td className='font-bold'>address:</td>
                <td className=' text-md font-thin'>Gasabo, kigali, Rwanda</td>
            </tr>
        </div>
        <div>
        <tr className='flex gap-4'>
                <td className='font-bold'>Birth Date:</td>
                <td className=' text-md font-thin'>14/3/2024</td>
            </tr>
            
        </div>
        <div>
        <tr className='flex gap-16 '>
                <td className='font-bold'>Age:</td>
                <td className=' text-md font-thin'>24</td>
            </tr>
        </div>
        
         
    
        
        </div>
        <div className='flex flex-col gap-2'>
        <div className=''>
            <tr className='flex gap-10'>
                <td className='font-bold'>Nationality:</td>
                <td className=' text-md font-thin'>Rwanda</td>
            </tr>
        </div>
        <div>
        <tr className='flex gap-19'>
                <td className='font-bold'>Study:</td>
                <td className=' text-md font-thin'>AUCA(Adventiste university of central Africa)</td>
            </tr>
        </div>
        <div>
        <tr className='flex gap-16'>
                <td className='font-bold'>Degree:</td>
                <td className=' text-md font-thin'>Bachelor</td>
            </tr>
        </div>
        <div>
         <tr className='flex gap-16'>
                <td className='font-bold'>interest:</td>
                <td className=' text-md font-thin'>Reading Books</td>

            </tr>
            <tr className='flex gap-12'>
                <td className='font-bold'>Freelance:</td>
                <td className=' text-md font-thin '>Available</td>
                
            </tr>
        </div>
        </div>
      
      </table>
    </div>
  )
}

export default Myinformation
