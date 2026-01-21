import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
   const param =  useParams()
   
  return (
    <div>
      <h1> {param.id} Details of courses</h1>
    </div>
  )
}

export default CourseDetails
