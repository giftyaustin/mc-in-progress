import { PRODUCTS_FETCHED, PRODUCTS_LOADING_FAILED, PRODUCTS_LOAIDNG } from "../constants/constants"

export const productsReducer = (state={products:[]}, action)=>{
    switch (action.type) {
        case PRODUCTS_LOAIDNG:
            
           return {
            loading: true,
            products:[]
           }
        case PRODUCTS_FETCHED:
            
           return {
            loading: false,
            products: action.payload.products,
            totalProducts: action.payload.totalProducts,
            resultsPerPage:action.payload.resultsPerPage,
            currPage: action.payload.currPage
           }
        case PRODUCTS_LOADING_FAILED:
            
           return {
            loading: false,
            error: action.payload
           }
        
        default:
            return state;
    }
}