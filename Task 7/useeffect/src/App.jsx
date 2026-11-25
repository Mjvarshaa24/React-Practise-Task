import React, { useEffect, useState } from 'react'
import './style.css'
const App = () => {

  const[name,setName]=useState("");
  const[count,setCount]=useState(0);

  useEffect(()=>{
    console.log("Component rendered");
  });

  useEffect(()=>{
    console.log("Page Loaded");
  },[]);

  useEffect(()=>{
    document.title="Hello" +name; 
  },[name]);

  return (
    <div>
      <h1>UseEffect</h1>
      <h3>Enter your name</h3>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>

      <h3>Counter: {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <h3>Hello,{name}</h3>
    </div>
  )
}

export default App
