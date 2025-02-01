import React, {Component} from 'react'

export default function App() {
  const data=[
    {id:1, name:"Shahbaz", email:"shahbaz@gmail.com"},
    {id:2, name:"John", email:"john@gmail.com"},
    {id:3, name:"Smith", email:"smiath@gmail.com"},
    {id:4, name:"Williams", email:"williams@gmial.com"}
  ]

  return (
      <div>
        <table  border='2px' align='center'>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        {
          data.map((user)=>(
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
        </table>
      </div> 
  )
}

