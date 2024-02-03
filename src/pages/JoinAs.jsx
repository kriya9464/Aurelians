import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";

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
    <div className='joinas'>
        <p>Join us as:</p>
        <Button onClick={handleVendor}>Vendor</Button>
        <Button onClick={handleCustomer}>customer</Button>
    </div>
  )
}

export default JoinAs