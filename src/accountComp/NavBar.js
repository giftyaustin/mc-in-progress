import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <nav className='d-flex width-100 nav-h'>
        <div className='mihles-text'>M<span>i</span>hles</div>
    <div className='search-h d-flex align-items-center'>
        <input type="text" placeholder='Search...' className='search-inp'/>
        <button className='search-btn mx-3'>search</button>
    </div>
      </nav>
    </div>
  )
}

export default NavBar
