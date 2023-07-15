import { PAGE, SEARCH } from "../constants/constants";

export const filterReducer = (state={keyword:'', page:1}, action)=>{

    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                keyword:action.payload.keyword
            }
        case PAGE:
            return {
                ...state,
                page:action.payload.page
            }
    
        default:
            return state;
    }

}