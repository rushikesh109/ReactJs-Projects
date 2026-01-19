import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contack from './Pages/Contack'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
         <Footer />
       <Routes>
        <Route path= '/' element={< Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Contact' element ={<Contack/>} />
       </Routes>
    
    </div>
  )
}

export default App
