

export const isGuestReducer = (state={}, action)=>{
    switch (action.type) {
        case 'isGuest':
            return {
                isGuest:true
            }
       
        case 'isAuthorized':
            return {
                isGuest:false
            }
          
    
        default:
          return state;
    }
}