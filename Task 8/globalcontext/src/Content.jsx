import React, { useContext } from 'react'
import LanguageContext from './LanguageContext';

const Content = () => {
    const{language}=useContext(LanguageContext);
    let greeting;
    let description;

    if(language === "English")
    {
        greeting="Hello,Welcome to my app";
        description="My first global context application";
    }
    else{
        greeting="வணக்கம்! எனது செயலிக்கு வரவேற்கிறோம்";
        description="எனது முதல் குளோபல் கான்டெக்ஸ்ட் செயலியாகும்";
    }
  return (
    <div>
            <h2>{greeting}</h2>
            <p>{description}</p>
    </div>
  )
}

export default Content