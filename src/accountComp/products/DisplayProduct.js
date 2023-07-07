import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './displayproduct.css'

const DisplayProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const fetchProductDetails = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const temp = await response.json();
    setProduct(temp);
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <div className="DisplayProduct">
      {product && (
        <>
        <div className="D-p-image-h">
          <img src={product.image} alt="" className="D-p-image"/>
      
        </div>
        <div className="D-p-title">{product.title}</div>
        <div className="D-p-desc my-3 w-100">{product.description}</div>
        <div className="D-p-category mb-3 w-100">{product.category}</div>
        <div className="D-p-price mb-3 w-100">Price: <span>{product.price} /-</span></div>
        <div className="D-p-rating mb-3 w-100">Rating: <span>{product.rating.rate}</span></div>
        <div className="D-p-rating mb-3 w-100">Total sales: <span>{product.rating.count}</span></div>
        <button className="D-p-addtocart">Add to cart</button>
        </>
      )}
    </div>
  );
};

export default DisplayProduct;
