import React, { useRef } from "react";
import "./filters.css";
import { addQueryToUrl } from "../utils/addQueryToUrl";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProducts } from "../businessFunc/fetchProducts";
import { useDispatch } from "react-redux";

const Filters = () => {
  const minRef = useRef()
  
  const maxRef = useRef()
  const urlParams = new URLSearchParams(window.location.search);
  let checkedCategories = [];
  if (urlParams.get("category")) {
    checkedCategories = urlParams.get("category").split(",");
  }
 

  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const options = [
    "fashion",
    "gaming",
    "electronics",
    "kids",
    "hardware",
    "sports",
    "sports-wear",
  ];
  const filterOptionsRef = useRef();
  const multiselectRef = useRef();
  const displayFilters = () => {
    if (filterOptionsRef.current.className === "filter-options-h") {
      filterOptionsRef.current.className = "filter-options-h display-filters";
    } else {
      filterOptionsRef.current.className = "filter-options-h";
    }
  };
  const displayCategories = () => {
    if (multiselectRef.current.className === "multiselect-drop") {
      multiselectRef.current.className = "multiselect-drop display-categories";
    } else {
      multiselectRef.current.className = "multiselect-drop";
    }
  };
  const handleCategoryClick = (e) => {
    if (e.target.id && e.target.checked) {
      const data = { category: e.target.id };

      addQueryToUrl(location, history, data);
      fetchProducts(dispatch);
    }
    if (e.target.id && !e.target.checked) {
      const data = { category: e.target.id };

      addQueryToUrl(location, history, data);
      fetchProducts(dispatch);
    }
  };
  const setPriceRange=()=>{
    const min = minRef.current.value
    const max = maxRef.current.value
    if(min && max){
      const data = {'price[gte]':min, 'price[lte]':max}
      addQueryToUrl(location,history, data)
      fetchProducts(dispatch)
    }
  }
  return (
    <div className="Filters">
      <div className="filter-options-h" ref={filterOptionsRef}>
        <div className="filters-dropdown" onClick={displayCategories}>
          Category
        </div>
        <div className="filters-dropdown no-border">Price</div>
        <div className="multiselect-drop" ref={multiselectRef}>
          {options.map((c, i) => {
            return (
              <label
                key={i}
                className="category-item-h"
                htmlFor={c}
                onClick={(e) => {
                  handleCategoryClick(e);
                }}
              >
                <input
                  type="checkbox"
                  id={c}
                  checked={checkedCategories.includes(c) ? true : false}
                  onChange={(e) => {
                    e.target.checked = false;
                  }}
                />{" "}
                <label htmlFor={c}>{c}</label>
              </label>
            );
          })}
        </div>
        <div className="price-range-h">
          <input type="text" className="range-inp" placeholder="min" ref={minRef}/>
          <input type="text" className="range-inp" placeholder="max"ref = {maxRef}/>
          <div className="price-set-btn" onClick={setPriceRange}>set</div>
        </div>
      </div>
      <div className="filters-dropdown" onClick={displayFilters}>
        Filters
      </div>
    </div>
  );
};

export default Filters;
