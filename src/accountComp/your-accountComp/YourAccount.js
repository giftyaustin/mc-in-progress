import React from "react";
import "./youraccount.css";
import { useSelector } from "react-redux";

const YourAccount = () => {
  const { name, email, createdAt, avatar } = useSelector(
    (state) => state.user.user
  );
  return (
    <div className="YourAccount">
      <div className="img-name-h">
        <div className="avatar-h">
          {avatar === undefined ? (
            <img
              className="no-avatar"
              src="https://picsum.photos/seed/picsum/200/300"
              alt=""
            />
          ) : (
            <img src={avatar} alt="" />
          )}
        </div>
        <div className="user-name">{name}</div>
      </div>
      <div className="user-email">Registered email: {email}</div>
       <div className="update-pass-btn-h"> <button className="update-password-btn">Update password</button></div>
        
    </div>
  );
};

export default YourAccount;
