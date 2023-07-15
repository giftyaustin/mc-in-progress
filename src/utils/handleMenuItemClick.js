export const handleMenuItemClick = (c, history)=>{
    switch (c) {
        case 'Login':
            history('/auth')
            break;
        case 'Homepage':
            history('/')
            break;
    
        default:
            break;
    }
}