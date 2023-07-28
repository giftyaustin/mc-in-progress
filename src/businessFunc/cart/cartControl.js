import { CART_LOADING, CART_SUCCESS } from "../../store/constants/constants";
import {
  sendDeleteRequest,
  sendPostRequest,
  sendPutRequest,
} from "../../utils/sendRequest";
import { showPopup } from "../../utils/showPopup";
import { fetchCart } from "../fetchCart";

export const changeCartItemQuantity = async (changeBy, itemIndex, dispatch) => {
  const data = { changeBy: changeBy, itemIndex: itemIndex };
  const response = await sendPutRequest(`/accounts/cart/`, data);
  if (response.message === `changed product quantity`) {
    fetchCart(dispatch);
  } else {
    console.log(response);
  }
};

export const removeCartItem = async (id, dispatch) => {
  const response = await sendDeleteRequest(`/accounts/cart/${id}`);
  if (response.message === "removed product from cart successfully") {
    fetchCart(dispatch);
  } else {
    console.log(response);
  }
};

export const addItemToCart = async (id, dispatch) => {
  const response = await sendPostRequest(`/accounts/cart/${id}`);
  const arr = [
    "added new item to the cart",
    "increased the product quantity in the cart",
    "cart created and added product successfully",
  ];
  if (arr.includes(response.message)) {
    showPopup(dispatch, {
      emotion: "Added successfully",
      message: "You can now see your product in your cart ",
    });
  } else {
    console.log(response);
  }
};


export const clearCart = async(dispatch)=>{
    const response = await sendDeleteRequest('/accounts/cart')
    fetchCart(dispatch);
}
