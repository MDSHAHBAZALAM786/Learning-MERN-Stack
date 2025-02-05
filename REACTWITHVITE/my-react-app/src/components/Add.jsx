import React from 'react'
import { useState } from 'react'

export default function Add() {
  const [add, setAdd]=useState(0)
  return (
    <div>
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add+1)}>Add</button>
    </div>
  )
}
