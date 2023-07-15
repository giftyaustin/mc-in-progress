import { LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SENT, LOGIN_REQUEST_SUCCESS } from "../constants/constants";

export const loginReducer = (state={}, action)=>{
    switch (action.type) {
        case LOGIN_REQUEST_SENT:
            return {
                loading:true
            }
        case LOGIN_REQUEST_SUCCESS:
            return {
                loading:false
            }
        case LOGIN_REQUEST_FAILED:
            return {
                loading:false
            }
    
        default:
            return state;
            
    }
}