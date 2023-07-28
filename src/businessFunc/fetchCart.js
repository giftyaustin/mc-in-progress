import { CART_FAILED, CART_LOADING, CART_SUCCESS } from "../store/constants/constants"
import { sendGETRequest } from "../utils/sendRequest"

export const fetchCart= async (dispatch)=>{
    try {
        dispatch({type:CART_LOADING})
        const cart = await sendGETRequest('/accounts/cart')
        
        if(cart){
            dispatch({type:CART_SUCCESS, payload:cart})
        }
    } catch (error) {
        console.log(error)
        dispatch({type:CART_FAILED, payload:error})
    }
    
}