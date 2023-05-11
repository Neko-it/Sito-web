import React from 'react'
import Video from "./../asset/video.mp4"

import './../App.css';
const Home = () => {
  return (
    <div className='home'>
      
      <h1 className='nome'>Matteo Frigo</h1>
      
      <div className='video'>
      
        <video autoPlay loop muted id='video'>
          <source src={Video} type='video/mp4'/>   
        </video>
        
      </div>  
      <h2 h1 className='nome'>Developer</h2>
    </div>
    
    
  )
}

export default Home