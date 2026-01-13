import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div>
      <h1 className='h-screen'>
        <Navbar />
        <Page1Content users={props.users} />
      </h1>
    </div>
  )
}

export default Section1
