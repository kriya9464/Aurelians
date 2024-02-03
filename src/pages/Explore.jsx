import React, { useEffect, useState } from 'react'
import './CSS/explore.css'
import { Avatar, Button } from '@mui/material';
import { getDocs,collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Explore = ({setUserId,setPostId,add,setPostAdd,pincode}) => {

  let navigate = useNavigate();
  const [vLists, setVList] = useState([]);
  const [near,setNear]=useState(false)
  const VCollectionRef = collection(db, "vendor-detail");

  

  /* if (!isLoaded) {
    return <SkeletonText />
  } */

  useEffect(()=>{

    const getPosts = async () => {
      const data = await getDocs(VCollectionRef);
      //console.log(data);
      setVList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();

  },[])

  
  return (
    <div className='explore'>
      <div className="header">
        
        <div className="gender-category">
          <span>Men</span>
          <span>Women</span>
        </div>

      </div>
      <div className="category-page"><h3>Men</h3></div>
      
        <div className="filter">
          <Button onClick={()=>setNear(true)}>Show Near by Tailors</Button>{/* <input type="text" placeholder='Enter Pincode' /> */}
        </div>

      <div className="service-container" >
        { !near &&
          vLists.map((post)=>{
            return(
              <div className="info-card" >
          <div className="info-title">
            <div className="avatar-icon"><Avatar/><h4>{post.name}</h4></div>
            
            <div className="info-details">
              <div className="ratings">Ratings<span>{post.status}</span></div>
            <div className='info-service'><Button onClick={()=>{setUserId(post.userid);setPostId(post.id)}}><Link to={`/ServicePage/${post.userid}`}>Services</Link></Button>
            <Button onClick={()=>{/* handleMap(post.address) */console.log(post.address);setPostAdd(post.address);navigate('/routemap')}}>Directions</Button>
            <br /><span>Contact:  {post.contact}</span></div>
            </div>
          </div>
        </div>
            )
          })
        }
        
       {
        near===true && (vLists.filter((p)=>p.pin===pincode)).map((item)=>{
          return(
            <div className="info-card" >
          <div className="info-title">
            <Avatar/><h4>{item.name}</h4>
            <div className="info-details">
              <div className="ratings">Ratings<span>{item.status}</span></div>
            <Button onClick={()=>{setUserId(item.userid);setPostId(item.id)}}><Link to={`/ServicePage/${item.userid}`}>Services</Link></Button><span onClick={()=>{/* handleMap(post.address) */console.log(item.address);setPostAdd(item.address);navigate('/routemap')}}>Directions</span>
            <span>{item.contact}</span>
            </div>
          </div>
        </div>
          )
        })
       }


      </div>
    </div>
  )
}

export default Explore
