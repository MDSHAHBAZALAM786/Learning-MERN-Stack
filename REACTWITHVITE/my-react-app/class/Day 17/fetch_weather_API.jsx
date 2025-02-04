import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const [state, setState]=useState()
  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Patna&appid={API}')
    .then((res)=>res.json())
    // .then((data)=>console.log(data.main.temp))
    .then((data)=>setState(data.main.temp))
  })
  return (
    <div>
      <h2>{state}</h2>
    </div>
  )
}
