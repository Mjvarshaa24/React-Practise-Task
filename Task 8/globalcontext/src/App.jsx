import React, { useState } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import LanguageContext from './LanguageContext'
import './style.css'

const App = () => {
  const[language,setLanguage]=useState("English")
  return (
    <div>
       <LanguageContext.Provider value={{language,setLanguage}}>
          <Navbar />
          <Content />
       </LanguageContext.Provider>
      

    </div>
  )
}

export default App
