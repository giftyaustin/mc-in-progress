import React from 'react'
import land from './LandingPage.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showPopup } from '../utils/showPopup'


const LandingPage = () => {
  const dispatch = useDispatch()
  const history=useNavigate();
  const setASsGuest=async()=>{
    dispatch({type:'isGuest'})
    await fetch('/accounts/guest')
    history('/g-account/products')
  }
  return (
    <div className={land.LandingPage}>
      <button onClick={()=>{showPopup(dispatch, {emotion:'Hey !!', message:'Welcome to Mihles.cart'} )}}>click</button>
      <button className={land.guestBtn} onClick={setASsGuest}>Explore as guest</button>
      <button className={land.guestBtn} onClick={()=>{dispatch({type:'isAuthorized'});history('/auth')}}>Login</button>
    </div>
  )
}

export default LandingPage