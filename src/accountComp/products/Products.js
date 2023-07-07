import React, { useEffect, useState } from "react";
import "./products.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const history = useNavigate()
  const [products, setProducts] = useState();
  const productsUrl = "https://fakestoreapi.com/products";

  // fetching product details from api
  const fetchProducts = async () => {
    const response = await fetch(productsUrl);
    const productsData = await response.json();
    setProducts(productsData);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const productClicked = (id)=>{
    history(`/accounts/products/${id}`)
  }
  return (
    <div className="Products">
      {products &&
        products.map((c, i) => {
          return (
            <div className="product-h" key={c.id} onClick={()=>{productClicked(c.id)}}>
              <img className="product-image" src={c.image} alt={c.title} />{" "}
              <div className="p-details-h">
                <p className="p-title">{c.title}</p>
                <p className="p-price">
                  Price: <span>{c.price}</span>
                </p>
                <p className="p-rating">
                  Rating: <span>{c.rating.rate}</span>
                </p>
              
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
