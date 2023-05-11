import React from 'react'
import Logo from '../asset/images/logo2.png'
import './component.css'
import { NavLink } from 'react-router-dom'
import { menuItem } from '../data/SiderbarData'

const Sidebar = () => {
            
  return (
    <div className='container'>
        
        <img className='logo' src={Logo} alt='logo'/>

        <div className='menu'>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link">
                        <div className='link-text'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>

        <div className='social'>
                Discord
            
        </div>
    </div>
  )
}

export default Sidebar