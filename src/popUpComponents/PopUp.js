

import './popup.css'
import { useSelector } from 'react-redux'
const PopUp = () => {
  const popup = useSelector((state)=>state.popup.popup) || {}
 
  
  return (
    <div className='PopUp' >
      <div className='popup-emotion'>{popup.emotion} </div>
      <p className='popup-message'>{popup.message}</p>
    </div>
  )
}

export default PopUp
