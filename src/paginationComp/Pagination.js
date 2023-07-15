import React, { useState } from "react";
import "./pagination.css";
import { addQueryToUrl } from "../utils/addQueryToUrl";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProducts } from "../businessFunc/fetchProducts";
import { useDispatch } from "react-redux";

const Pagination = ({ resultsPerPage, totalProducts, setPage, currPage }) => {
  const totalPages = Math.ceil(totalProducts / resultsPerPage);
    currPage = Number(currPage)

    const location = useLocation()
    const history = useNavigate()
    const dispatch= useDispatch()
  return (
    <div className="Pagination">
      <div className="prev-next-h">
        {Number(currPage) === 1 || <button className="next-btn"   onClick={(e)=>{addQueryToUrl(location, history, {page:currPage-1}); fetchProducts(dispatch)}}>Prev</button>}
        {Number(currPage) === totalPages || (
          <button className="next-btn"   onClick={(e)=>{addQueryToUrl(location, history, {page:currPage+1}); fetchProducts(dispatch)}}>Next</button>
        )}
      </div>
      <div className="page-no-h">
        {Array(totalPages)
          .fill(0)
          .map((c, i) => {
            if(i===0 || i+1 === totalPages || currPage ===i+1 || currPage-2===i || currPage===i){
                return (
                    <div key={i}
                      
                      onClick={(e)=>{addQueryToUrl(location, history, {page:i+1}); fetchProducts(dispatch)}}
                      className={`page-number${
                        Number(currPage) === i + 1 ? " currPage" : ""
                      }`}
                    >
                      {i + 1}
                    </div>
                  );
            }
            if(currPage-3===i || currPage+1===i){
              return (<div key={i}>. . .</div>)
            }
            
          })}
      </div>
    </div>
  );
};

export default Pagination;
