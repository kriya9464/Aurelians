import React, { useState } from 'react'
// import logo_icon from '.../assets/logo.png'
import {Routes, Route, useNavigate} from 'react-router-dom';
import './userDash.css'
import Measure from './Measure';
import Modal from 'react-responsive-modal';
import { Close} from '@mui/icons-material';
import 'react-responsive-modal/styles.css';
const UserDash = ({tailor}) => {
    const navigate = useNavigate();
    const [showmeasure,setShowMeasure]=useState(false)
    console.log("user",tailor)

  const navigatetoUserDashboard = () => {
    // 👇️ navigate to /contacts
    navigate('/userDashboard');
  };

  const navigatetoMeasurements = () => {
    // 👇️ navigate to /
   // navigate('/Measurement');
   setShowMeasure(true)
  };
  const close=(<Close />)

  const [modal,setModal]=useState(false)
  return (
    <div className='user-dashpage'>
      {/* <div className="navbar">
        <div className="logo">
            <img src="" alt="Aurelians" />
        </div>
        <div className="searchbox">
            <img src="" alt="" />
            <input type="text" placeholder='Search'/>
        </div>
        <div className="person-icon">Profile</div>
      </div> */}

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
                  <li><button onClick={()=>setModal(true)}>Track</button>
                  <Modal
        open = {modal}
        closeIcon = {close}
        onClose = {()=> setModal(false)}
        closeOnEsc
        centercloseOnOverlayClick={false}
        styles={{
          overlay: {
            height:"auto",
          },
          backgroundColor:"yellow"
        }}
        >

<ul className="timeline">

{/* <!-- Item 1 --> */}
<li>
  <div className="direction-r">
    <div className="flag-wrapper">
      <span className="flag">Freelancer</span>
      {/* <span className="time-wrapper"><span class="time">2013 - present</span></span> */}
    </div>
    <div className="desc">Item in progress</div>
  </div>
</li>

{/* <!-- Item 2 --> */}
<li>
  <div className="direction-l">
    <div className="flag-wrapper">
      <span className="flag">Apple Inc.</span>
      {/* <span className="time-wrapper"><span class="time">2011 - 2013</span></span> */}
    </div>
    <div className="desc">Iteam ready</div>
  </div>
</li>

{/* <!-- Item 3 --> */}
<li>
  <div className="direction-r">
    <div className="flag-wrapper">
      <span className="flag">Harvard University</span>
      {/* <span className="time-wrapper"><span class="time">2008 - 2011</span></span> */}
    </div>
    <div className="desc">Item delivered</div>
  </div>
</li>

</ul>
            
            </Modal>
                  </li>
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
      {
        showmeasure && <div className="measure">
           <Measure tailor={tailor}/>
        </div>
      }
     
      
    </div>
  )
}

export default UserDash
