import React from "react";
import auth from "./Auth.module.css";
import { useRef, useState } from "react";
import "./auth.css";
import { registerUser } from "../businessFunc/registerUser";
import { handleInputChange } from "../utils/handleInputChange";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/actions/loginActions";

const Auth = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [login, setLogin] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const logRef = useRef();
  const regRef = useRef();
  const [email, setEmail] = useState();
  const [lemail, setLemail] = useState();
  const [lpassword, setLpassword] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const loginLoading = useSelector((state) => state.login.loading);

  return (
    <div className={auth.Auth}>
      {login ? (
        // login block

        <div className="lblockh" ref={logRef}>
          <div className={auth.inpLabelH}>
            <p>username</p>
            <input
              className={auth.inpBox}
              onChange={(e) => {
                handleInputChange(e, setLemail);
              }}
            />
          </div>
          <div className={auth.inpLabelH}>
            <p>Password</p>
            <input
              className={auth.inpBox}
              onChange={(e) => {
                handleInputChange(e, setLpassword);
              }}
            />
          </div>
          <button
            className='signUpBtn'
            onClick={(e) => {
              loginUser(dispatch, lemail, lpassword, history);
            }}
          >
            {!loginLoading ? "Login" : <div className="login-loading"></div>}
          </button>
          <div className={auth.haveAnAccount}>
            No account?{" "}
            <button
              className={auth.rLoginbtn}
              onClick={() => {
                logRef.current.className += " exit";
                setTimeout(() => {
                  setLogin(!login);
                }, 200);
              }}
            >
              Register
            </button>
          </div>
        </div>
      ) : (
        // register block

        <div className="rblockh" ref={regRef}>
          <div className={auth.inpLabelH}>
            <p>Email</p>
            <input
              className={auth.inpBox}
              onChange={(e) => {
                handleInputChange(e, setEmail);
              }}
            />
          </div>
          <div className={auth.inpLabelH}>
            <p>Full name</p>
            <input
              className={auth.inpBox}
              onChange={(e) => {
                handleInputChange(e, setFullName);
              }}
            />
          </div>
          <div className={auth.inpLabelH}>
            <p>Password</p>
            <input
              className={auth.inpBox}
              onChange={(e) => {
                handleInputChange(e, setPassword);
              }}
            />
          </div>
          {showOtp ? (
            <div>
              <input type="text" placeholder="Enter otp" />
            </div>
          ) : (
            ""
          )}
          <button
            className='signUpBtn'
            onClick={() => {
              registerUser(email, fullName, password, history);
            }}
          >
            Sign up
          </button>
          <div className={auth.haveAnAccount}>
            Already have an account?{" "}
            <button
              className={auth.rLoginbtn}
              onClick={() => {
                regRef.current.className += " exit";
                setTimeout(() => {
                  setLogin(!login);
                }, 200);
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}
      {/*       ===========  =  = = = = = == = = = = */}
    </div>
  );
};

export default Auth;
