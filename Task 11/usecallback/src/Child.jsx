import React from 'react'
import { useEffect } from 'react'
import './style.css'

const Child = ({handleCity}) => {
    useEffect(()=>{
        console.log("Function recreated");
    },[handleCity])
  return (
    <div className="btn">
        <button onClick={handleCity}>Show city</button>
    </div>
  )
}

export default Child