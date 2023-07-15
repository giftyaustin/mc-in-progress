import { sendGETRequest, sendPostRequest } from "../../utils/sendRequest";
import { showPopup } from "../../utils/showPopup";
import { LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SENT, LOGIN_REQUEST_SUCCESS, USER_DETAILS_LOADING, USER_DETAILS_SUCCESS, USER_DETAILS_EMPTY } from "../constants/constants";

export const loginUser = async (dispatch, email, password, history)=>{
    try{
        dispatch({type:LOGIN_REQUEST_SENT})
        const data = {email:email, password:password}
        const response = await sendPostRequest('/accounts/login', data)
      
        if(response.message==='token sent sucessfully'){
            
            const response = await sendGETRequest('/accounts/')
            if(response.user.email){
                dispatch({type: LOGIN_REQUEST_SUCCESS})
                dispatch({type:USER_DETAILS_SUCCESS, payload: response.user})
                showPopup(dispatch, {emotion: 'Login successful', message: 'Welcome back to Mihles.cart'})
                history('/accounts/products')
            }
        }
        else{
            dispatch({type:LOGIN_REQUEST_FAILED})
            showPopup(dispatch, {emotion:'Login failed', message: response.message})
        }
        
    }
    catch(error){
        dispatch({type:LOGIN_REQUEST_FAILED})
        showPopup(dispatch, {emotion:'Something went wrong', message: error.message})
    }
}
export const logoutUser = async(dispatch, history) =>{
    await sendGETRequest('/accounts/logout/')
    dispatch({type: USER_DETAILS_EMPTY})
    history('/')
}