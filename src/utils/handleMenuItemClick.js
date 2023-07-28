export const handleMenuItemClick = (c, history)=>{
    switch (c) {
        case 'Login':
            history('/auth')
            break;
        case 'Homepage':
            history('/')
            break;
        case 'Your cart':
            history('/accounts/cart')
            break;
        case 'Products':
            history('/accounts/products')
            break;
        case 'Your account':
            history('/accounts/me')
            break;
    
        default:
            break;
    }
}