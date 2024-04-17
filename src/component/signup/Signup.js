import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div>
      <div className="signup1">
        <div className="heading">
          <h1 id="set-heading">Sign up</h1>
        </div>
        <div className="signup-main">
          <div className="signup-container">
            <div className="signup-head">
              <h5 id="set-sign">Sign up</h5>
            </div>
            <input id="signup-email" type="text" placeholder="E mail Adress" />
            <input
              id="signup-password"
              type="password"
              placeholder=" Set a Password"
            />
            <input
              id="signup-cpassword"
              type="Confirm Your password"
              placeholder="Confirm Your Password"
            />
            <button id="signup-buttn">Sign up</button>
            <div className="signup-or">
              <p> <span></span> OR</p>
            </div>
            <div className="signup-google">
              <h1 id="set-g">G</h1>
              <p>continue with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
