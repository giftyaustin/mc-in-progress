import { CART_FAILED, CART_LOADING, CART_SUCCESS, CART_QUANTITY_CHANGED} from "../constants/constants";

export const cartReducer = (state={items:[]}, action)=>{
    switch (action.type) {
        case CART_LOADING:
            return {loading:true, items:[]}
        case CART_SUCCESS:
            return {loading:false,
            items:action.payload.items,
            message:action.payload.message,
            totalDiffProducts:action.payload.totalDiffProducts
        }
        case CART_FAILED:
            return {loading:false,
            message:action.payload}


    
        default:
            return state;
    }
}