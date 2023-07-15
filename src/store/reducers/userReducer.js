import { USER_DETAILS_LOADING, USER_DETAILS_SUCCESS, USER_DETAILS_FAILED ,USER_DETAILS_EMPTY} from "../constants/constants"
export const userReducer = (state={user:{}}, action)=>{
    switch (action.type) {
        case USER_DETAILS_LOADING:
            
           return {
            user:{}
           }
        case USER_DETAILS_SUCCESS:
            
           return {
            user:action.payload
           }
        case USER_DETAILS_FAILED:
            
           return {
            error:action.payload.error.message
           }
        case USER_DETAILS_EMPTY:
            
           return {
           user:{}
           }
    
        default:
            return state;
    }
}