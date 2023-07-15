import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer';
import { popupReducer } from './reducers/popupReducer';
import { loginReducer } from './reducers/loginReducer';
import { productsReducer } from './reducers/productsReducer';
import { isGuestReducer } from './reducers/isGuestReducer';
import { filterReducer } from './reducers/filterReducers';

const reducer = combineReducers({
    login:loginReducer,
    user: userReducer,
    popup: popupReducer,
    products: productsReducer,
    isGuest: isGuestReducer,
    filters: filterReducer

})
const initialState = {};
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;