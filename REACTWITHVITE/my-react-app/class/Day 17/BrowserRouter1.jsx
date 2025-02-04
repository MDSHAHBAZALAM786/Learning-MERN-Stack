import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Services from './Services'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h2>Home page</h2>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
