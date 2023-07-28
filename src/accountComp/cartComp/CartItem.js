import React from 'react'
import './cartitem.css'
import { changeCartItemQuantity, removeCartItem } from '../../businessFunc/cart/cartControl'
import { useDispatch } from 'react-redux'

const CartItem = ({name, image, price, quantity,i, id}) => {
  const dispatch = useDispatch()
  return (
    <div className='CartItem'>
      <div className='ci-img-h'><img src={image} alt={name} />
      <div className='ci-name-h'>{name}</div></div>

     <div className="ci-quantity-h"> <button disabled = {quantity===5? true: false} onClick={()=>{changeCartItemQuantity(1,i, dispatch)}}>+</button><span>{quantity}</span><button disabled = {quantity===1 ? true : false} onClick={()=>{changeCartItemQuantity(-1, i, dispatch)}}>-</button></div>
      <div className="ci-price-h">₹{price}</div>
     <button className='ci-remove-btn' onClick={()=>{removeCartItem(id, dispatch)}}>Remove</button>
    </div>
  )
}

export default CartItem
