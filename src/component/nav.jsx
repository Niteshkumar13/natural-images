import React, { useState } from 'react';
import Card,{ About,Service } from './card';
import logo11 from './logo1.png';
import logo1 from './WhatsApp_Image_2023-10-23_at_4.06.05_PM-removebg-preview.png';
import logo2 from './photo2.jpg';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import './style1.css';
import Fetchdata from './Fetchdata';
export default function Nav() {
  const windowInnerWidth  = document.documentElement.clientWidth;

  const [data,sdata] = useState();
  const [des,sdes] = useState(false);
  const [color,scolor] = useState();
  function hello(){
    sdes(true)
    scolor("black")
if (des === true){
    sdes(false)
    scolor("rgb(143, 164, 159)")
  }}

  window.onresize = function(event) {
    if (window.innerWidth <767){
      sdes(true)
      scolor("black")
    }
    else{
      sdes(false);
      scolor("rgb(143, 164, 159)")
    }   
};

window.onload = function(event) {
  if (des === true){
    sdes(false);
  }
  else{
    sdes(true);
  }   
};
      window.onscroll = function() {
       
        if (window.scrollY > 22) {
          sdata(true)
        } else {
          sdata(false);
          
        }
      };
  return (
    <>
     <BrowserRouter>
    
    <div className='Navbar'  style={{boxShadow: data&&"1px 5px 10px black"}} >
    <Link to="/"><img src={logo11} className='logo2' alt='logo2'/></Link>

      <ul style={{display:des&&"none"}} >
  
      <li><Link className='Link' to="/" onClick={ windowInnerWidth<767&& hello}>Home</Link></li>
      <li><Link className='Link' to="/service" onClick={ windowInnerWidth<767&& hello}>Service</Link></li>
      <li><Link className='Link' to="/blogs" onClick={windowInnerWidth<767&& hello}>About-us</Link></li>
    
     </ul> 
     <i class="fa fa-bars" onClick={hello} style={{color:color}}></i>
    </div>

    <Routes>
    <Route path="/" element={
      <>
      <Card/>
    
      </>
    }/>
        <Route path="/more" element={
      <>
    
     <Fetchdata/>
      </>
    }/>
     <Route path="/blogs" element={
      <>
      <div className='card-holder' >
      <About name="Anshu Kumar" title="Photographer" image={logo2} email="mailto:kumaranshu28545@gmail.com"/>
      <About name="Nitesh Kumar" title="Software developer" image={logo1} email="mailto:niteshk48044@gmail.com"/>

      </div>
      </>
     }/>
     <Route path="/service" element={
      <>
      <div className='card-holder hellomaybe' >
        
      <Service/>
      </div>
      </>
     }/>
     </Routes>
    </BrowserRouter>
    </>
  )

   
  
}
