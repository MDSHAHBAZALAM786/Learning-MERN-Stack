import React from 'react'
import { useState } from 'react'
import Data from './City.json'

export default function App() {
  const [search, setSearch]=useState('')

  return (
    <div>
      <h1>City Name</h1>
      <input type="text" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)} />
      <br />
      {/* {Data.map(city=><li>{city.name}</li>)} */}
      {/* {Data.filter(city=>city.name.includes(search)).map(city=><li>{city.name}</li>)} */}
      {Data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city=><li>{city.name}</li>)}
    </div>
  )
}
