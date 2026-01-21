import React from 'react'

const Navbar = (props) => {
  const themeChanged = () => {
  props.setTheme('light')
 
  }
  return (
    <div>
      <button onClick={themeChanged}>change theme </button>
    </div>
  )
}

export default Navbar
