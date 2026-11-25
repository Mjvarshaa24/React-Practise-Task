import React, { useState } from 'react'
import './style.css'

const Feedback = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[rating,setRating]=useState("");
    const[message,setMessage]=useState("");

        const handleSubmit=(e)=>{
            e.preventDefault();
        
        const feedback={name,email,rating,message};
        console.log(feedback);

        setName("");
        setEmail("");
        setRating("");
        setMessage("");

        };

  return (
    <div className="forms">
        <h1>Feedback Form</h1>
        <form onSubmit={handleSubmit}>
        <div className="feedback">
            <div className="group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} required/>
           </div>

            <div className="group">
            <label>Email</label>
            <input type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>

             <div className="group">
            <label>Rating(1-5)</label>
            <select value={rating} onChange={(e)=>setRating(e.target.value)} required>
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>

            <div className="group">
            <label>Message</label>
            <textarea placeholder="Enter your message" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
            </div>

        </div>
 
            <button type="submit">Submit</button>
        </form>
          
           <div className="preview">
                <h2>Live Preview</h2>

                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Rating: {rating}</p>
                <p>Message: {message}</p>
           </div>
    </div>
  )
}

export default Feedback