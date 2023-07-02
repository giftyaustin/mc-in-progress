import React from 'react'
import land from './LandingPage.module.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const history=useNavigate();
  return (
    <div className={land.LandingPage}>
      <button className={land.guestBtn} onClick={()=>{history('/auth')}}>Explore as guest</button>
      <button className={land.guestBtn} onClick={()=>{history('/auth')}}>Login</button>
    </div>
  )
}

export default LandingPage
