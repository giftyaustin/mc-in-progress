import React from 'react'
import './menubar.css'

const Menubar = ({func}) => {
    const menuItems = ['Your cart', 'Previous orders','Edit address', 'Your account' ]
  return (
    <div className='Menubar'>
        <div className='menu-close-icon-h justify-content-end  bg-transparent'><div onClick={func} className="close-menu-h "><img src={require('../assets/images/close.png')} alt="" className="close-menu-icon" /></div></div>
        <div className='menu-block-h'>{menuItems.map((c,i)=>{
            return(<button key={i} className='menu-item'>{c}</button>)
        })}</div>
      
        <button className='menu-item sign-out-btn'>Sign out</button>

    </div>
  )
}

export default Menubar
