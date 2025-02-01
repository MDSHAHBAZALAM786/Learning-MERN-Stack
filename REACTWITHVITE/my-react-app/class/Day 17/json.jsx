import React, { Component } from 'react'
import Data from './Data.json'
import './style.css'

export default function App() {

  return (
    // <div>
    //   <h1>React</h1>
    //   <table></table>
    //   {
    //     Data.map((item)=>(
    //       <li>{item.name}</li>,
    //       <img src={item.pic}/>
    //     ))
    //   }
    // </div>

    <div>
      <table border='2px' align='center'>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Pic</td>
        </tr>
        {
          Data.map((item)=>(
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img src={item.pic}/></td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

