import React from 'react'
import './menubar.css'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../store/actions/loginActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleMenuItemClick } from '../utils/handleMenuItemClick'

const Menubar = ({func, authorized}) => {
  const history = useNavigate()
  const dispatch= useDispatch()
    const menuItems = authorized ? ['Your cart', 'Previous orders','Edit address', 'Your account' ] : ['Login', 'Homepage']
  return (
    <div className='Menubar'>
        <div className='menu-close-icon-h justify-content-end  bg-transparent'><div onClick={func} className="close-menu-h "><img src={require('../assets/images/close.png')} alt="" className="close-menu-icon" /></div></div>
        <div className='menu-block-h'>{menuItems.map((c,i)=>{
            return(<button key={i} className='menu-item' onClick={(e)=>{handleMenuItemClick(c, history)}}>{c}</button>)
        })}</div>
      
        {authorized && <button className='menu-item sign-out-btn' onClick={()=>{logoutUser(dispatch, history)}}>Sign out</button>}

    </div>
  )
}

export default Menubar
