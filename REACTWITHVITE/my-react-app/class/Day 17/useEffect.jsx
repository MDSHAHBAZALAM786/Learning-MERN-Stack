import React from 'react'
import { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App() {
  const [state,setState]=useState(0)
  const handler1=()=>{
    setState(state+1)
  }
  const handler2=()=>{
    setState(state-1)
  }
  useEffect(()=>{
    console.log("Mounted....")
  },[])
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={handler1} className='btn btn-primary'>Increment</button>
      <button onClick={handler2} className='btn btn-danger'>Decrement</button>
    </div>
  )
}
