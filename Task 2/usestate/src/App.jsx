import React, { useState } from 'react'
import './App.css'

const App = () => {
  const[tickets,setTickets]=useState(0)

  const addTicket=()=>{
    if(tickets<10){
      setTickets(prev=>prev+1);
    }
  }

  const removeTicket=()=>{
    if(tickets>0){
      setTickets(prev=>prev-1);
    }
  }

  const clearTickets=()=>{
    setTickets(0);
  }

  const addtwoTickets=()=>{
    if(tickets+2<=10){
      setTickets(prev=>prev+2);
    }
    else{
      setTickets(10);
    }
  }

  return (
    <div className="ticket">
      <h1>Ticket Booking Counter</h1>
      <h3>Ticket Booked:{tickets}</h3>

      <button onClick={addTicket}>Add Ticket</button>
      <button onClick={removeTicket}>Remove Ticket</button>
      <button onClick={addtwoTickets}>Bonus:2</button>
      <button onClick={clearTickets}>Clear</button>

    </div>
  )
}

export default App
