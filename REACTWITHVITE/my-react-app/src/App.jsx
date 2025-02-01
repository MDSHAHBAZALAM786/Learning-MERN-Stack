import React from 'react'
import { useState } from 'react'

// export default function App() {
//   const [state, setState]=useState("Lovely Professional University")
//   const handler=()=>{
//     setState("Full Stack Development")
//   }
//   return (
//     <div>
//       <h2>{state}</h2>
//       <button onClick={handler}>Update State</button>
//     </div>
//   )
// }

export default function App(){
  const students=['Ajit ','Srujit ','Mohan ','Singh']
  const [data, setData]=useState(students)
  const handler=()=>{
    setData(["Seetha ",'Geetha ','Priya ','Jaya'])
  }
  return (
    <div>
      <h2>{data}</h2>
      <button onClick={handler}>Update Array Values</button>
    </div>
  )
}
