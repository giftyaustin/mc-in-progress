import React, { useEffect, useState } from "react";
import "./products.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../businessFunc/fetchProducts";
import Pagination from "../../paginationComp/Pagination";


const Products = () => {
  const { products, resultsPerPage, totalProducts, currPage, loading } = useSelector(
    (state) => state.products
  );
 const keyword = useSelector(state=>state.filters.keyword)
  const [page, setPage] = useState()
  const isGuest = useSelector((state) => state.isGuest.isGuest);
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation()

 

  useEffect(() => {
    
    fetchProducts(dispatch)
  }, []);
  return (
    <>
      <div className="Products">
        {loading ? 'loading products....' : 
        
          products.map((c, i) => {
            return (
             
              <div  key={i}
                className="product-h"
               
                onClick={() => {
                  history(
                    isGuest
                      ? `/g-account/products/${c._id}`
                      : `/accounts/products/${c._id}`
                  );
                }}
              >
                <div className="product-image-h">
                  {" "}
                  <img
                    className="product-image"
                    src={c.images[0].url}
                    alt={c.name}
                  />
                </div>
                <div className="p-details-h">
                  <p className="p-title">{c.name}</p>
                  <p className="p-price">
                    Price: <span>{c.price}</span>
                  </p>
                  <p className="p-rating">
                    Rating: <span>{c.rating}</span>
                  </p>
                </div>
              </div>
            );
          })
  }
      </div>
      {totalProducts > resultsPerPage && (
        <Pagination
          resultsPerPage={resultsPerPage}
          totalProducts={totalProducts}
          currPage={currPage}
          setPage = {setPage}
        />
      )}
    </>
  );
};

export default Products;
