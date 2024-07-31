import React from 'react';
import Headerprincipal from "./components/Headerprincipal";
import Hero from "./components/Hero";
import {useState, Suspense} from 'react';
import backgroundImg from '/img/fondomissiongo.png';
import Redes from './components/Redes';
import Comofunciona from './components/Comofunciona';
import MailchimpForm from './components/MailchimpForm';
import Footer from './components/Footer';

function App() {
  return (
     <div className='app-container'>
      <Headerprincipal  backgroundImg={backgroundImg}/>
      <div className="body-content bg-cover bg-center"style={{ backgroundImage: `url(${backgroundImg})`,backgroundSize: 'cover',backgroundPosition:'center',backgroundAttachment:'fixed' }}>
        <Hero/>
        <Redes/>
        <Comofunciona/>
        <MailchimpForm/>
        <Footer/>
        
       
    

        
        

        </div>
      </div>

  )
}

export default App
