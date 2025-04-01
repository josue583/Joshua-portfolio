import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import cardInformation from '../assets/cardInformation'
import Parterners from '../components/Parterners'

function createCard(cardinf){
  return(
    <Card
    key={cardinf.key}
    cardNo={cardinf.cardNo}
    cardTitle={cardinf.cardTitle}
    content={cardinf.content}
    />
  );
}
function Service() {
  
  return (
    <div className='flex flex-col'>
      <Sidebar/>
      <div className='w-full min-h-screen flex flex-col gap-8 bg-[#121212ff] pt-12 pl-8 md:pt-40 p-6  md:ml-64'>
        <div className='flex flex-col gap-10 md:pl-32'>
        <button className='w-20 h-10 bg-[#3b3b3bff] text-white '>Services</button>
        <h1 className='text-2xl text-white font-extrabold'>What I Do</h1>
        </div>
        <div className='w-full  md:w-4/5   flex  flex-wrap gap-8 md:pl-32 '>
            {cardInformation.map(createCard)}
        </div>
        <Parterners/>
      </div>
    </div>
  )
}

export default Service
