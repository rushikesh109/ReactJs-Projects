import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar1 = () => {

    const navigate = useNavigate()
  return (
    <div className='flex justify-between bg-white rounded mt-3 ml-2 mr-2 py-2 px-4'>
      <button onClick={()=>{
          navigate(-1)
        }} 
       className='bg-amber-300 px-3 py-2 mt-3 ml-2 rounded cursor-pointer' >Back</button>
        <button onClick={()=>{
          navigate('/')
        }} className='bg-amber-300 px-3 py-2 mt-3 ml-2 rounded cursor-pointer ' >Return to home page</button>
      <button onClick={()=>{
        navigate(+1)
      }} 
       className='bg-amber-300 px-3 py-2 mt-3 mr-2 rounded cursor-pointer' >next</button>
    </div>
  )
}

export default Navbar1
