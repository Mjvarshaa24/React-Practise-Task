import React from 'react'
import EmployeeCard from './EmployeeCard'
import './style.css'


const App = () => {
  return (
    <div className="details">
      <h1>Employee Details</h1>

      <div className="status">
      <EmployeeCard  name="Swetha" role="Frontend Developer" Salary={35000} isActive={true}/>

      <EmployeeCard  name="Rosni" role="React Developer" Salary={40000} isActive={true}/>

      <EmployeeCard  name="Arun" role="UI/UX Developer" Salary={30000} isActive={false}/>


      </div>
    </div>
  )
}

export default App
