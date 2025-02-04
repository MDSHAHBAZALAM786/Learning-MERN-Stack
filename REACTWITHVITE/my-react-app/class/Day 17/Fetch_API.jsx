import React from 'react'
import { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'

export default function App() {
  const[state, setState]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setState(json))
  },[])

  return (
    <>
      <div className='conatiner'>
        <div className='row'>
          {state.filter(item=>item.title.includes('Men')).map((item)=>{
            return(
              <div className='col-md-3'>
                <div className='card'>
                  <img src={item.image} alt='image' className='card-img-top'/>
                  <div className='card-body'>
                    <h6 className='card-title'>{item.title}</h6>
                    <h6 className='card-title'>{item.price}</h6>
                    <button className='btn btn-primary'>Go Somewhere</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
