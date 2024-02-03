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

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      //setIsAuth(true);
      navigate("/joinas");
    });
};
  return (
    <div className='loginpg'>
        <p style={{color:"white"}}>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      
    </div>
  )
}

export default Login
