import React from 'react'
import './App.css'
const App = () => {
  const title={
    width:"300px",
    padding:"20px",
    margin:"150px auto",
    backgroundColor:"lightblue",
    border:"2px solid grey",
    borderRadius:"10px",
  }
  return (
    <>
    <div style={title}>
      <h1 style={{color:"blue",fontSize:"20px",marginBottom:"10px"}}>Premium Plan</h1>
      <h2>₹899/month</h2>
      <p>Get access for premium features</p>
      <hr></hr>
      <ul>
        <li>Unlimited Support</li>
        <li>Premium Features</li>
        <li>Monthly Update</li>
      </ul>
      <button className="buy">Buy Now</button>
    </div>
    </>
  )
}

export default App
