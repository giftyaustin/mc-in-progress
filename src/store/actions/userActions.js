import { USER_DETAILS_LOADING, USER_DETAILS_SUCCESS, USER_DETAILS_FAILED } from "../constants/constants"


const getUser = async(dispatch)=>{
    try {
        dispatch({type: USER_DETAILS_LOADING})
        const response = await fetch('/accounts/login')
        const user = await response.json()
        dispatch({type:USER_DETAILS_SUCCESS, payload:user})
        
    } catch (error) {
        dispatch({type:USER_DETAILS_FAILED, payload:error})
    }
}