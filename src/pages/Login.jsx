import React, { useState } from 'react'
import './CSS/login.css'
import user_icon from'../assets/person.png'
import email_icon from'../assets/email.png'
import password_icon from'../assets/password.png'
import {auth, provider} from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const [action,setAction] =useState("Sign up");
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      //setIsAuth(true);
      navigate("/joinas");
    });
};
  return (
    <div className='loginpg'>
      <div className="log-header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="log-inputs">
            {action==="Login"?<div></div>:<div className="log-input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
            
            <div className="log-input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="log-input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <p style={{color:"white"}}>OR</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
        </div>
        {/* <p style={{color:"white"}}>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button> */}
      
    </div>
  )
}

export default Login
