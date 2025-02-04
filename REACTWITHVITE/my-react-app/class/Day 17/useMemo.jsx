import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export default function App() {
  const [add, setAdd]=useState(0)
  const [del, setDel]=useState(100)
  const addition=()=>{
    setAdd(add+1)
  }
  const deleteion=()=>{
    setDel(del-1)
  }
  // function multiply(){
  //   console.log("LPU")
  //   return add*10
  // }
  const multiplictaion=useMemo(function multiply(){
    console.log("LPU")
    return add*10
  },[add])
  return (
    <div className='m-5 border border-4 w-25 '>
      {add}
      <h2>{multiplictaion}</h2>
      <button onClick={addition} className='btn btn-primary m-2'>Addition</button>
      <br />
      {del}
      <button onClick={deleteion} className='btn btn-danger m-2'>Subtraction</button>

    </div>
  )
}
