import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

const Navbar = () => {

    const{language,setLanguage}=useContext(LanguageContext)

    const Change=()=>{
        if(language==="English")
        {
            setLanguage("Tamil");
        }
        else{
            setLanguage("English");
        }
    }
  return (
    <div>
        <nav>
            <h1>Language App</h1>
          
            <button onClick={Change}>Change Language</button>
            
        </nav>
    </div>
  )
}

export default Navbar