import React, {useState} from "react";
import "./menubar.css";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/actions/loginActions";
import { useDispatch } from "react-redux";
import { handleMenuItemClick } from "../utils/handleMenuItemClick";
import { useLocation } from "react-router-dom";

const Menubar = ({ func, authorized }) => {
  const location = useLocation()
  const history = useNavigate();
  const dispatch = useDispatch();
  const pathname = location.pathname.split('/')[2]
 
  const menuItemMap = {
    'products': "Products",'cart':"Your cart", 'me':'Your account'
  }
  const menuItems = authorized
    ? [
        "Products",
        "Your cart",
        "Previous orders",
        "Edit address",
        "Your account",
      ]
    : ["Login", "Homepage"];
  return (
    <div className="Menubar">
      <div className="menu-close-icon-h justify-content-end  bg-transparent">
        <div onClick={func} className="close-menu-h ">
          <img
            src={require("../assets/images/close.png")}
            alt=""
            className="close-menu-icon"
          />
        </div>
      </div>
      <div className="menu-block-h">
        {menuItems.map((c, i) => {
          return (
            <button
              key={i}
              name="menuItembtn"
              className={`menu-item ${menuItemMap[`${pathname}`]===c ?"menu-active": ''}`}
              onClick={(e) => {
                func(e.target.name)
                handleMenuItemClick(c, history);
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      {authorized && (
        <button
          className="menu-item sign-out-btn"
          onClick={() => {
            logoutUser(dispatch, history);
          }}
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Menubar;
