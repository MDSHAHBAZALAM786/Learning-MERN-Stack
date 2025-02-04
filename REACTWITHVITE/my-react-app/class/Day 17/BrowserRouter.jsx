import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h2>Home page</h2>} />
          <Route path='/about' element={<h2>About us</h2>} />
          <Route path='/services' element={<h2>Services</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
