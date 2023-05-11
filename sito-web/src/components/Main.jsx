import React from 'react'
import lav from './../asset/images/logo1.png'
import './component.css'


const Main = () => {
  return (
    <div className='main' >
      <h1>In Lavorazione ...</h1>
      <div>
        <img className='lav' src={lav} alt='lav'/>
      </div>
    </div>
  )
}

export default Main