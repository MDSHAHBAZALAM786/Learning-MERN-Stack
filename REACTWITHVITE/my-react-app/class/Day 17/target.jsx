import React from 'react'
import { useState } from 'react'

export default function App() {
  const [state, setState]=useState("LPU")
  const handler=(e)=>{
    setState(e.target.value)
  }
  return (
    <div>
      <h2>{state}</h2>
      <input type="text" value={state} onChange={handler}/>
    </div>
  )
}
