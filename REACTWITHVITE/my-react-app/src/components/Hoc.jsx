import React from 'react'
const clr={
    color:'Red',
    background:'Yellow'
}

export default function Hoc(props) {
  return (
    <h3 style={clr}><props.x/></h3>
  )
}
