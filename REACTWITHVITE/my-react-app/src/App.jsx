import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Services from './Services'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link> 
        <Routes>
          <Route path='/' element={<h2>Home page</h2>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
