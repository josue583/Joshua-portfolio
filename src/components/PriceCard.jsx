import React from 'react'

function PriceCard(props) {
    // const DescriptionList=props.description.spl
  return (
    <div className='w-full md:w-80 h-96  text-white border border-gray-400'>
        <div className='flex flex-col'>
        <h1>{props.price}</h1>
        <h2>{props.type}</h2>
        </div>
    
     <ul>
        {props.description.map((desc,index)=>{
            <li key={index}>{desc}</li>
        })}
     </ul>
     <button>{props.butoon}</button>
    </div>
  )
}

export default PriceCard
