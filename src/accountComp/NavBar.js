import React, { useState } from "react";
import "./navbar.css";
import { handleInputChange } from "../utils/handleInputChange";
import { fetchProducts } from "../businessFunc/fetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SEARCH } from "../store/constants/constants";
import { addQueryToUrl } from "../utils/addQueryToUrl";

const NavBar = () => {
  const location = useLocation();
  const history = useNavigate();
  const search = useSelector((state) => state.filters.search);
  const dispatch = useDispatch();

  return (
    <div className="NavBar">
      <nav className="d-flex width-100 nav-h">
        <div className="mihles-text">
          M<span>i</span>hles
        </div>
        <div className="search-h d-flex align-items-center">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const data = { k: e.target.firstChild.value };
              if (data.k != "") {
                addQueryToUrl(location, history, data);
                fetchProducts(dispatch);
              }
             
            }}
          >
            <input type="text" placeholder="Search..." className="search-inp" />
            <button className="search-btn" type="submit">
              search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
