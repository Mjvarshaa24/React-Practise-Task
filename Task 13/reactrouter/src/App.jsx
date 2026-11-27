import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Bonus from './pages/Bonus'
import Error from './pages/Error'
import Navbar from './Navbar'


const App = () => {
  return (
    <div>
      
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/products/:id" element={<Bonus />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
       
    </div>
  )
}

export default App
