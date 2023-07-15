import { POPUP_DETAILS_NONE, POPUP_DETAILS_TRUE } from "../store/constants/constants"


export const showPopup =(dispatch, popUpMessage )=>{
    dispatch({type:POPUP_DETAILS_TRUE, payload:popUpMessage})
   
    setTimeout(()=>{dispatch({type: POPUP_DETAILS_NONE})}, 10000)
}