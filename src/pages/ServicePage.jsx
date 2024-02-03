import React, { useEffect, useState } from "react";
import "./CSS/service.css";
import { db, storage } from "../firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
const ServicePage = ({userid,postId}) => {
  const [portList,setPortList]=useState([])
  const [imgUrl,setImgUrl] =useState([])
  const portCollectionRef=collection(db,'vendor-detail')
  const pCollectionRef=collection(db,'price-detail')
  const [price,setPrice]=useState([])
  

  useEffect(()=>{
    listAll(ref(storage,`${userid}`)).then(imgs=>{
        console.log(imgs)
        imgs.items.forEach(val=>{
            getDownloadURL(val).then(url=>{
                setImgUrl(data=>[...data,url])
                
            })
         } )
        
    })
    console.log("useeffect",imgUrl)
    const getPortfolio = async () => {
      const data = await getDocs(portCollectionRef);
      setPortList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getPrice=async()=>{
      const data = await getDocs(pCollectionRef);
      setPrice(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

   

    getPortfolio();

    const uniqueItems = [...new Set(imgUrl)];
    //console.log(uniqueItems)
    setImgUrl(uniqueItems)

},[])

console.log("out",imgUrl)
  return (
    <div id="ServicePage">
      {
        (portList.filter((p)=>p.id===postId)).map((post)=>{
          return (
            <div className="Service-Page">
              <div className="Service-Info">
        <div className="about">
          <h1>{post.name}</h1>
          <span className="timing">Timing: 09.00am-08.00pm</span>
          <span className="status">{post.status}</span>
          <span className="rating">Rating</span>
          <span>{post.address} </span>
          <span className="contact">{post.contact}</span>
          <p>
            We are established tailors since 1990s with long family history in
            the work. We provide all kinds of stitching services for both men
            and women.
          </p>

          <button>Place order</button>
          <button>Book an appointment</button>
        </div>
        <div className="directions">
          {/* map aega yahan user ki location se vendor tk direction */}
        </div>
        </div>
        <h2>Our Services and Rates</h2>
        <div className="Service-section">
        
        <div className="Service-container">
        {
          imgUrl.map((img)=>{
            return(             
      
          <div className="Service-card">
            <div className="serviceImage">
              <img
                src={img}
                alt=""
              />
            </div>
            <span>Kurti - 500</span>
          </div>        
      
            )
          })
        }
        </div>
        <div className="service-samples"></div>
        {/* <br/> */}
      </div>


        {/* {
          imgUrl.map((img)=>{
            return(
            
              
      <div className="Service-section">
        
        <div className="Service-container">
          <div className="Service-card">
            <div className="serviceImage">
              <img
                src={img}
                alt=""
              />
            </div>
            <span>Kurti - 500</span>
          </div>
          
        </div>
        <div className="service-samples"></div>
        <br/>
      </div> 
      
            )
          })
        } */}


      </div>      
      
          )
        }
        
        )
      }
      
    </div>
  );
};

export default ServicePage;
