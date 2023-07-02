import React from "react";
import auth from "./Auth.module.css";
import { useRef, useState } from "react";
import "./auth.css";

const Auth = () => {
  const [login, setLogin] = useState(true);
  const [showOtp,setShowOtp] = useState(false)
  const logRef = useRef()
  const regRef = useRef()

  return (
    <div className={auth.Auth}>
      {login ? (

// login block

        <div className="lblockh" ref={logRef}>
          {/* <div className={auth.inpLabelH}>
            <p>Email</p>
            <input className={auth.inpBox} />
          </div> */}
          <div className={auth.inpLabelH}>
            <p>username</p>
            <input className={auth.inpBox} />
          </div>
          <div className={auth.inpLabelH}>
            <p>Password</p>
            <input className={auth.inpBox} />
          </div>
          <button className={auth.signUpBtn}>Login</button>
          <div className={auth.haveAnAccount}>
           No account?{" "}
            <button className={auth.rLoginbtn} onClick={()=>{
              logRef.current.className+=' exit';
              setTimeout(()=>{setLogin(!login)}, 200)

            }}>Register</button>
          </div>
        </div>
      ) :
      
// register block

      (
        <div className="rblockh" ref={regRef}>
          <div className={auth.inpLabelH}>
            <p>Email</p>
            <input className={auth.inpBox} />
          </div>
          <div className={auth.inpLabelH}>
            <p>username</p>
            <input className={auth.inpBox} />
          </div>
          <div className={auth.inpLabelH}>
            <p>Password</p>
            <input className={auth.inpBox} />
          </div>
          {showOtp?<div><input type="text" placeholder="Enter otp" /></div>:''}
          <button className={auth.signUpBtn} onClick={()=>{setShowOtp(true)}}>{showOtp ? 'Submit':'Sign Up'}</button>
          <div className={auth.haveAnAccount}>
            Already have an account?{" "}
            <button className={auth.rLoginbtn} onClick={()=>{
                 regRef.current.className+=' exit'
              setTimeout(()=>{setLogin(!login)}, 200)
            }}>Login</button>
          </div>
        </div>
      )}
{/*       ===========  =  = = = = = == = = = = */}
    
    </div>
  );
};

export default Auth;
