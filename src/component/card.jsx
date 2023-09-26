import React from 'react';
import './card.css';
import { motion,animate } from "framer-motion"

import Fetchdata from './Fetchdata';
import d from './download.png';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

const images = require.context('./images', true);
const imageList = images.keys().map(image => images(image));
export default function Card() {

  return (
    <>
    <div className='container'>
        {imageList.map((image, index) => (
          <div className='image-container'>
        <img key={index} src={image} alt={`image${index}`} className='image1' />
       <div className='hover-effect'> <div className='download-image'>
        <span className='download'>Download</span><a href={image} download={`pico-image${index}`}><img key={index} src={d} alt={"download"} className='download-logo'/></a>
       </div></div>
        </div>
      ))}
  {/* {items.map(item => (
  <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
    <motion.h5>{item.subtitle}</motion.h5>
    <motion.h2>{item.title}</motion.h2>
  </motion.div>
))}

<AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence> */}
     
    </div>

    <h2 className='more'><Link to="/more" style={{color:"white",textDecoration:"none"}} >more...</Link></h2>
   
    
    
    </>
  )
}
export  function About(props) {
  return (
    <>
  
            <div className='card-cont'>
                <img src={props.image} alt="h" className="image"/>
                <p className='title'>{props.name}</p>
                <p className='title-soft'>{props.title}</p>
                <button className='Contact-me'><a href={props.email} style={{textDecoration:"none",color:"black"}}>Contactme</a></button>
          
        </div>
        </>
  )
}


export  function Bottomn() {

  return (
    <>

    <div className='made-with-heart'>
      <span className='made-with'>Made with</span><span className='heart'>❤️</span>
    </div>
    </>
  )
}

export  function Service() {
  return (
    <div className='about-content'>
      <h2 style={{fontFamily: "sans-serif"}}>We are Consistently providing the best quality services requires a combination of technical
       expertise, creativity, professionalism and a commitment to continuous improvement. It's not just about taking pictures; 
       It's about creating moments that last a lifetime.
</h2>
    </div>
  )
}

