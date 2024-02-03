import React from 'react'
// import logo_icon from '.../assets/logo.png'
import {Routes, Route, useNavigate} from 'react-router-dom';
import './userDash.css'
const UserDash = () => {
    const navigate = useNavigate();

  const navigatetoUserDashboard = () => {
    // 👇️ navigate to /contacts
    navigate('/userDashboard');
  };

  const navigatetoMeasurements = () => {
    // 👇️ navigate to /
    navigate('/Measurement');
  };
  return (
    <div>
      <div className="navbar">
        <div className="logo">
            <img src="" alt="Aurelians" />
        </div>
        <div className="searchbox">
            <img src="" alt="" />
            <input type="text" placeholder='Search'/>
        </div>
        <div className="person-icon">Profile</div>
      </div>

      <div className="sidebar">
        <div className="quickLink list">
            <span>Quick Links</span>
            <ul>
                  <li><button onClick={navigatetoUserDashboard}>Dashboard</button></li>
                  <li><button onClick={navigatetoMeasurements}>Measurements</button></li>
                  <li><button>Coupons</button></li>    
            </ul>
        </div>
        <div className="orders list">
            <span>Orders</span>
            <ul>
                  <li><button>Track</button></li>
                  <li><button>Recents</button></li>
                  <li><button>Review</button></li>
                  <li><button>Cart</button></li>    
            </ul>
        </div>
        <div className="quickLink list">
            <span>Explore</span>
            <ul>
                  <li><button>Services</button></li>
                  <li><button>Blogs</button></li>
                  <li><button>Review</button></li>    
            </ul>
        </div>
        <div className="settings">Settings</div>

      </div>
      
    </div>
  )
}

export default UserDash
