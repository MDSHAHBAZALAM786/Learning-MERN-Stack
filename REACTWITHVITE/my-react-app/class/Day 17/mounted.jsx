import React from 'react'
import { useEffect } from 'react'

export default function App() {
  useEffect(()=>{
    console.log("Component Mounted")
  },[])

  return (
    <h1>UseEffect() hook</h1>
  )
}
