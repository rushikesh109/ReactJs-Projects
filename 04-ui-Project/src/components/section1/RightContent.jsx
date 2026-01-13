import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id ="right"className='overflow-x-auto rounded-4xl h-full flex flex-nowrap gap-10 p-6 w-2/3'>
    {props.users.map(function(elem, idx){
    return <RightCard key = {idx} idx={idx} img={elem.img} color={elem.color} tag={elem.tag}/>
    })}
   
    </div>
  )
}

export default RightContent
