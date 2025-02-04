import React from 'react'
import { useRef } from 'react'

export default function App() {
  const myref=useRef()
  // console.log(myref.current.value)
  const handler=()=>{
    alert(myref.current.value)
  }
  return (
    <div>
      <form onSubmit={handler}>
        <input type="text" ref={myref} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

