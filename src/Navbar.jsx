import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import './pages/CSS/home.css'
import { Button } from '@mui/material'
import './navbar.css'
import { useNavigate } from "react-router-dom";

function Navbar({isAuth}) {
  let navigate = useNavigate();
  const joinas=localStorage.getItem("joinas") 
  const handlejoinas=()=>{
    if(joinas=="vendor"){
      navigate("/VendorDash")
    }else{
      navigate("/userDashboard")
    }
  }

  return (
    <div className='navbar'>
        <div className="nav_bar">
            
                <img src={logo} alt="logo" height={30} 
                />
                <Button><Link to='/'>About us</Link></Button>
                {isAuth?<Button onClick={handlejoinas}>Profile</Button>:<Button><Link to="/Login">  Login</Link> </Button>}
                
        
        </div>
    </div>
  )
}

export default Navbar