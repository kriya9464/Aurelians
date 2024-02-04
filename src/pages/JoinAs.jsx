import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
import './CSS/joinas.css'
function JoinAs() {
    let navigate = useNavigate();
    const handleVendor =()=>{
        navigate("/vendor");
        localStorage.setItem("joinas", "vendor");
    }

    const handleCustomer=()=>{
        navigate("/");
        localStorage.setItem("joinas", "customer");
    }
  return (
    <div className='joinAs'>
        <h2>Join us as:</h2>
        <Button onClick={handleVendor}>Vendor</Button>
        <Button onClick={handleCustomer}>customer</Button>
    </div>
  )
}

export default JoinAs