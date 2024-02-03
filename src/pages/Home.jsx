import React from 'react'
import {Link} from 'react-router-dom';

import './CSS/home.css'
const Home = () => {

  return (
    <div className='homepage'>
        {/* <div id="navbar">
            <ul className="nav">
                <li className="nav-item logo"><img src={logo} alt="logo" height={30} width
                /></li>
                <li className="nav-item" >About us</li>
                <li className="nav-item" ><Link to="/Login">  Login</Link> </li>
            </ul>
        </div> */}
        <div className="home">
        <div className="homeImage"><img src="./src//assets//homeimg.png" alt="Demo Image"  /></div>
        <div className="homeContent">
            <h1>Aurelians</h1>
            <h4>Connecting Talent and Livelihood</h4>
            
            <div className="exploreOptions">
                <div className="exploreCard">
                    <h2><Link to='/Explore'>Tailors</Link></h2>
                    <span>Stiching to your needs</span>
                </div>
                <div className="exploreCard">
                    <h2>Beauty/Hair Salons</h2>
                    <span>Grooming to your style</span>
                </div>
            </div>
            <div class="mainText">
             <h1>Your Style<div class="roller">
          <span id="rolltext">Our<br/>
              Commitment</span><br/>
              
         <span id="spare-time">Explore services now</span><br/>
         </div>
              </h1>
    
         </div>
            <div className='hometext'>
            <p>Login to get doorstep service to your style</p>
            
        </div>
        </div>
       
        <footer>
            
        </footer>
        </div>
    </div>
  )
}

export default Home
