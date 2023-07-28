import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './displayproduct.css'
import { useDispatch, useSelector } from "react-redux";
import { sendGETRequest } from "../../utils/sendRequest";
import { addItemToCart } from "../../businessFunc/cart/cartControl";

const DisplayProduct = () => {
  const { id } = useParams();
 const [product, setProduct] = useState()
 const dispatch = useDispatch()

const fetchProduct = async()=>{
  const response =  await sendGETRequest(`/products/${id}`)
 
  setProduct(response.product)
}

  useEffect(()=>{
  fetchProduct();

  },[])
  
  return (
    <div className="DisplayProduct">
      {product && (
        <>
        <div className="D-p-image-h">
          <img src={product.images[0].url} alt="" className="D-p-image"/>
      
        </div>
        <div className="D-p-title">{product.name}</div>
        <div className="D-p-desc my-3 w-100">{product.desc}</div>
        <div className="D-p-category mb-3 w-100">{product.category}</div>
        <div className="D-p-price mb-3 w-100">Price: <span>{product.price} /-</span></div>
        <div className="D-p-rating mb-3 w-100">Rating: <span>{product.rating}</span></div>
        <div className="D-p-rating mb-3 w-100">Total sales: <span>{product.stock}</span></div>
        <button className="D-p-addtocart" onClick={()=>{addItemToCart(id, dispatch)}}>Add to cart</button>
        </>
      )}
    </div>
  );
};

export default DisplayProduct;
