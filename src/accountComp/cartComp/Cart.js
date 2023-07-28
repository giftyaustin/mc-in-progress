import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThreeVerticalLines from "../../loadingComp/ThreeVerticalLines";
import { fetchCart } from "../../businessFunc/fetchCart";
import CartItem from "./CartItem";
import "./cart.css";
import { clearCart } from "../../businessFunc/cart/cartControl";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalDiffProducts, message, loading } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    fetchCart(dispatch);
  }, []);

  return (
    <div className="Cart">
      {loading ? (
        <ThreeVerticalLines />
      ) : items.length === 0 ? (
        <div>
          Your cart is empty. Explore the product page to find your best it
          products
        </div>
      ) : (
        
        items.map((c, i) => {
          return (
            <>
              <div key={i}>
                <CartItem
                  name={c.product.name}
                  price={c.product.price}
                  image={c.product.images[0].url}
                  quantity={c.quantity}
                  i={i}
                  id={c.product._id}
                />
              </div>
            </>
          );
        })
      )}
      {loading!==true && items.length!==0 && <div className="w-100 text-center">
          <button
            className="clear-cart-btn-h"
            onClick={() => {
              clearCart(dispatch);
            }}
          >
            Clear cart
          </button>
        </div>}
    </div>
  );
};

export default Cart;
