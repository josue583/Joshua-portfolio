import React from 'react'

function PriceCard(props) {
    // const DescriptionList=props.description.split(',')
  return (
    <div className='w-full ml:32 md:w-72 h-86 text-white border border-gray-100 pl-8 pt-8 pb-8 flex flex-col gap-12 opacity-80'>
        <div className='flex flex-col'>
        <h1 className='text-2xl font-extrabold'>{props.price}<span className='text-sm'>$</span></h1>
        <h2 className='text-2xl font-extrabold'>{props.type}</h2>
        </div>
    
     <ul className='display flex flex-col gap-2 font-thin'>
        {props.description.map((desc,index)=>{
           return <li key={index}>{desc}</li>
        })}
     </ul>
     <button className='w-32 h-12 bg-white text-black  hover:scale-x-110 hover:translate-x-2 '>{props.button}</button>
    </div>
  )
}

export default PriceCard
