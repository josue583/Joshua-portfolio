import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import cardInformation from '../assets/cardInformation'
import Parterners from '../components/Parterners'
import Funfact from '../components/Funfact'
import funInformation from '../components/funInfo'
import PriceCard from '../components/PriceCard'
import Price from '../assets/Price'
import { motion } from 'framer-motion'
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
function createFun(fun){
  return(
    <Funfact
    key={fun.key}
    funNumber={fun.funNumber}
    description={fun.description}
    />
  );
}
function Createprice(p,index){
  return(
    <PriceCard
    key={index}
    price={p.price}
    type={p.type}
    description={p.description}
    button={p.button}
    />

  )
}
function Service() {
  
  return (
    <div className='flex flex-col xl:flex xl:flex-row'>
      <Sidebar/>
      <motion.div
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.6,ease:"easeOut"}}
       className='w-full min-h-screen flex flex-col gap-8 bg-[#121212ff] pt-12 pl-8 xl:pt-40 p-6  xl:ml-64'>
        <div className='flex flex-col gap-10 md:pl-32'>
        <button className='w-20 h-10 bg-[#3b3b3bff] text-white '>Services</button>
        <h1 className='text-2xl text-white font-extrabold'>What I Do</h1>
        </div>
        <div className='w-full  xl:w-4/5   flex  flex-wrap justify-center gap-8 xl:pl-32 '>
            {cardInformation.map(createCard)}
        </div>
        <Parterners/>
        <div className=' flex flex-col gap-16 justify-center p-8 xl:p-0'>
        <h1 className='text-white text-2xl font-extrabold xl:pl-32'>Fun Facts</h1>
        <div className='flex flex-wrap gap-8 xl:pl-32 items-center'>
        {funInformation.map(createFun)}
        </div>
       
          
        </div>
         <div className=' h-[900hdv] bg-[#000000ff] md:pl-32 flex gap-16 items-center flex-wrap p-8 '>
       {Price.map(Createprice)}
        </div>
      </motion.div>
    </div>
  )
}

export default Service
