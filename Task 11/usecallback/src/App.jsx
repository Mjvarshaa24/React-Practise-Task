import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Child from './Child';
import './style.css'

const App = () => {
  const[count,setCount]=useState(0);
  const[city,setCity]=useState("Chennai");

  const handleCity=useCallback(()=>{
    console.log("Current city:" ,city);
  },[city])
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
        <h2>City: {city}</h2>
        <button onClick={()=>setCity("Bangalore")}>Change City</button>
        <Child handleCity={handleCity}/>
    </div>
  )
}

export default App
