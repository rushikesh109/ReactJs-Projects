import React, { createContext, useState } from 'react'

export const ThemeDataContext = createContext()
const ThemeContext = (props) => {

const [theme, seTheme] =  useState('light')
  return (
    <div>
        <ThemeDataContext.Provider value={[theme, seTheme]} >
          {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
