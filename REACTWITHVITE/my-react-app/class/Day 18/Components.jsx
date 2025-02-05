import React from 'react'
import Add from './components/Add'
import Del from './components/Del'
import Hoc from './components/Hoc'

export default function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Hoc x={Add} />
      <Hoc x={Del} />
    </div>
  )
}
