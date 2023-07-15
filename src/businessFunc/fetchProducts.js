import { PRODUCTS_FETCHED, PRODUCTS_LOAIDNG } from "../store/constants/constants"
import { sendGETRequest } from "../utils/sendRequest"
import { showPopup } from "../utils/showPopup"


function getQueryParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of urlParams) {
      params[key] = value;
    }
    return params;
  }

export const fetchProducts = async(dispatch)=>{
    try {
        dispatch({type:PRODUCTS_LOAIDNG})
        const params = getQueryParameters();
        
        const keyword = params.k || ''
        const page = params.page || 1
    const uri = `/products?keyword=${keyword}&page=${page}`
    const response = await sendGETRequest(uri)
   
    if(response.products){
        dispatch({type:PRODUCTS_FETCHED, payload: response})
    }
    else{
        showPopup(dispatch, {emotion: 'Oops', message: 'some eeorro'})
       
    }
  
    } catch (error) {
        
        showPopup(dispatch, {emotion: 'Oops', message: error.message})
    }
    
    
}