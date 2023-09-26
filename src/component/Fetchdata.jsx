import React,{useState,useEffect } from 'react'
import './card.css';
import d from './download.png';
export default function Fetchdata() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://picsum.photos/v2/list?page=2&limit=60')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  
  return (
    <div className='container' style={{marginBottom:'50px'}}>
    {posts.map((image, index) => (
      <div className='image-container'>
    <img key={index} src={image.download_url} alt={`image${index}`} className='image1' />
   <div className='hover-effect'> <div className='download-image'>
    <span className='download'>Download</span><a href={image.download_url} download><img key={index} src={d} alt={"download"} className='download-logo'/></a>
   </div></div>
    </div>
  ))}

 
</div>
  )
}
