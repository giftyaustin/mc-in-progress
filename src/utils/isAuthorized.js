import { USER_DETAILS_SUCCESS } from "../store/constants/constants"

export const isAuthorized =async (setState, dispatch)=>{
    const response = await fetch(`/accounts/`)
    const res = await response.json()
    if(res.authorized){
        setState(true)
        dispatch({type: USER_DETAILS_SUCCESS, payload:res.user})
       
    }
    else{
        setState(false)
    }
}