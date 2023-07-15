import { POPUP_DETAILS_NONE, POPUP_DETAILS_TRUE } from "../constants/constants";

export const popupReducer = (state={showPopup:false,popup:{}}, action)=>{
    switch (action.type) {
        case POPUP_DETAILS_NONE:
            return {
                showPopup:false,
            }
            
        case POPUP_DETAILS_TRUE:
            return {
                showPopup:true,
                popup:action.payload
            }
            
           
    
        default:
            return state;
    }
}