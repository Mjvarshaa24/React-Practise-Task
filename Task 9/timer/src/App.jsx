import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import './style.css'

const App = () => {
    
  const[time,setTime]=useState(0);
  const timer=useRef();

  const start=()=>{
        if(timer.current)
          return;
        timer.current=setInterval(()=>{
          setTime(prev=>prev+1);
        },1000)
  }

  const stop=()=>{
        clearInterval(timer.current);
        timer.current=null;
  }

  const reset=()=>{
        clearInterval(timer.current);
        timer.current=null;
        setTime(0);
  }
  return (
    <div className="timer">
      <h1>Timer</h1>
      <h2>{time}    Seconds</h2>
      
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
