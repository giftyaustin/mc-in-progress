import React, { useRef } from 'react'
import NavBar from './NavBar'
import './userhome.css'
import Products from './products/Products'
import {Routes, Route} from 'react-router-dom'
import DisplayProduct from './products/DisplayProduct'
import Menubar from '../menuComp/Menubar'

const UserHome = () => {
  const leftRef = useRef()
  const rightRef = useRef()
  const handleMenuIconClick=()=>{
    if(leftRef.current.className==="left-block"){
      leftRef.current.className="left-block menu-opened"
      rightRef.current.className="right-block blur"
    }
    else{
      leftRef.current.className="left-block"
      rightRef.current.className="right-block"
    }
  }
  return (
    <div>
      <NavBar/>
      <div onClick={handleMenuIconClick} className='menu-open-icon-h'><img className='menu-open-icon' src={require('../assets/images/threeLines.png')} alt="" /></div>
      <div className="main-block d-flex">
      <div className='left-block' ref={leftRef}><Menubar func={handleMenuIconClick}/></div>
      <div className='right-block' ref={rightRef}><Routes>
        
        <Route exact path = '/' element={<Products/>}/>
        <Route exact path='/products/:id' element={<DisplayProduct/>}/>
        
        </Routes></div></div>
    </div>
  )
}

export default UserHome
