import React, { useEffect, useState } from 'react'
import './VendorDash.css'
import Modal from 'react-responsive-modal';
import { Close} from '@mui/icons-material';
import {auth, db, storage} from '../../firebase-config'
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
;
import 'react-responsive-modal/styles.css';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const VendorDash = ({userid,tailor}) => {
  //console.log(userid)
  let navigate = useNavigate();
  //console.log(auth.currentUser.uid,"auth")
  console.log(tailor,"tailor")
  const [img,setImg] =useState('')
  const [text,setText]=useState("")
  const [available,setAvailable]=useState(true)
  const [vid,setVid]=useState("")
  const [status,setStatus]=useState("Available")
  const [showupload,setShowUpload]=useState(true)
  const close=(<Close />)
  const [modalopen,setModalOpen]=useState(false)
  const vendorid=localStorage.getItem("userid")
  const vendorCollectionRef = collection(db, "price-detail")
  const handleupload=async()=>{
    if(img !==null){
      const imgRef =  ref(storage,`${vendorid}/${v4()}`)
      uploadBytes(imgRef,img).then(value=>{
          console.log(value)
          /* getDownloadURL(value.ref).then(url=>{
              setImgUrl(data=>[...data,url])
          }) */
      })
   }

   
   await addDoc(vendorCollectionRef, {text,userid: auth.currentUser.uid})
  }

  const VCollectionRef = collection(db, "vendor-detail");
  const MCollectionRef = collection(db, "measurement-detail");
  const SelfCollectionRef = collection(db, "self-delivery-detail");
  const [vendorlist,setVendorList]=useState([])
  const [measure,setMeasure]=useState([])
  const [self,setSelf]=useState([])
  

  useEffect(()=>{

    const getPosts = async () => {
      const data = await getDocs(VCollectionRef);
      //console.log(data);
      setVendorList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const measurementList=async()=>{
      const data = await getDocs(MCollectionRef);
      //console.log(data);
      setMeasure(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    const selfService=async()=>{
      const data = await getDocs(SelfCollectionRef);
      //console.log(data);
      setSelf(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    measurementList();
    selfService();
    getPosts();

  },[])

  const [showservice,setShowService]=useState(false)
  
  const handleStatus=async()=>{
    const text=vendorlist.filter((p)=>p.userid===vendorid)
   // console.log("id",text[0].id);
    setVid(text[0].status)
    
   // console.log(text[0].status);
    if(text[0].status==="Available"){
      console.log("status",status)
      const updateData = doc(db,"vendor-detail",text[0].id)
      await updateDoc(updateData,{status:"Not Available"})
      //setAvailable(false)
    }else{
      console.log("status3",status)
      if(text[0].status==="Not Available"){
        const updateData = doc(db,"vendor-detail",text[0].id)
      await updateDoc(updateData,{status:"Available"})
      }
    }
    console.log("status2",status)
    
      navigate("/Explore")
  }

  const handleorder=()=>{
    setModalOpen(true)
  }
  const vendorID=localStorage.getItem("vendorid")
  //console.log(auth.currentUser.uid,"uid")
  //console.log("v",auth.currentUser.uid)


  return (
    <div className='Vendor-DashPage'>
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
                  <li><button >Dashboard</button></li>
                  <li><button onClick={handleorder}>Recent orders</button></li>
                  <li><button>Feedback</button></li>    
            </ul>
        </div>
        <div className="orders list">
            <span>Update</span>
            <ul>
                  <li><button >Services</button></li>
                 
                  <li><button onClick={handleStatus}>Update Status</button>
                 
                  </li>
                  <li><button>Media</button></li>
                  <li><button>Cart</button></li>    
            </ul>
        </div>
        
        <div className="settings">Settings</div>

      </div>

      <div className='vendor-serviceupload'>
        <h3>Upload New Service and Rate</h3>
      <input type="file" onChange={(e)=>setImg(e.target.files[0])} /> 
        <input type="text" placeholder='price' onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleupload}>Upload</button>
        </div>

        {
           /* auth.currentUser.uid==vendorID && */  <div className="order">
             
                    <Modal
        open = {modalopen}
        closeIcon = {close}
        onClose = {()=> setModalOpen(false)}
        closeOnEsc
        centercloseOnOverlayClick={false}
        styles={{
          overlay: {
            height:"auto",
          },
          backgroundColor:"yellow"
        }}
        >
            {
              (measure/* .filter((p)=>p.VID===auth.currentUser.uid) */ ).map((post)=>{
                return (
                 
                  <div className="recentorder">
          <div className="modal_btn">
          <p style={{color:"black"}}>bust:{post.bust}{", "}waist:{post.waist}{', '}upperwaist:{post.upperwaist}{', '}neck:{post.neck}{', '}upperhip:{post.upperhip}{', '}shoulder:{post.shoulder}{', '}arm:{post.arm}{', '}wrist:{post.wrist}{', '}frontbodice:{post.frontbodice}{', '}backbodice:{post.backbodice}{', '}hiptoknee:{post.hiptoknee}{', '}inseam:{post.inseam}{', '}hiptoankle:{post.hiptoankle}</p>
          </div>

          <div className="outercontainer">
          <div className="btn">
                    <Button>accept</Button>
                    </div>
                    <div className="btn">
                    <Button>decline</Button>
                    </div>
                    
                  </div>
                    
                    
                  </div>
                )
              })
            }
{
            (self/* .filter((p)=>p.userid===auth.currentUser.uid) */ ).map((post)=>{
              return (
                <div className="recentorder">
                  
                  <p style={{color:"black"}}>UserName:{post.name}{", "}service: self service</p>
                  <div className="outercontainer">
                  <div className="btn">
                    <Button>accept</Button>
                    </div>
                    <div className="btn">
                    <Button>decline</Button>
                    </div>
                    
                  </div>
                  
                </div>
              )
            })
          }
            </Modal>
          </div>

        
        }

        { 
          <div className="selfservice">
          
        </div>
        }
      
    </div>
  )
}

export default VendorDash
