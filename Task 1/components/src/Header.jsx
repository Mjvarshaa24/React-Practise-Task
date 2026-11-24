import React from 'react'
import './style.css'
const Header = () => {
  return (
    <div>
        <div className="head">
            <header>
                <h1>The Golden Restaurant</h1>
            </header>
            <nav className="link">
                <a href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </div>
  )
}

export default Header