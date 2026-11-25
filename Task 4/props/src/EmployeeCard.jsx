import React from 'react'
import './style.css'
const EmployeeCard = (props) => {
     let status;
     let statusColor;
     if(props.isActive)
    {
        status="Active";
        statusColor="Green";
     } 
     else{
        status="Inactive";
        statusColor="Red";
     }
  return (
    <div>
        <h2>{props.name}</h2>
        <p>Role : {props.role}</p>
        <p>Salary : ₹{props.Salary}</p>
        <p style={{color:statusColor}}>{status}</p>
    </div>
  )
}
export default EmployeeCard