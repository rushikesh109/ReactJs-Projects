import React, { useContext } from 'react'
import { ThemeDataContext } from '../context.jsx/ThemeContext'

const Navbar2 = () => {
   const [theme] = useContext(ThemeDataContext)
   
   
  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>about</h4>
      <h4>contact</h4>
      <h4>{theme}</h4>
    </div>
  )
}

export default Navbar2
