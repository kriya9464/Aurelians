import React, { useEffect, useState } from 'react'
import './VendorDash.css'
import Modal from 'react-responsive-modal';
import { Close} from '@mui/icons-material';
import {auth, db, storage} from '../../firebase-config'
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';

const VendorDash = ({userid}) => {
  console.log(userid)
  const[isModalOpen, setisModalOpen] = useState(false);
  const [img,setImg] =useState('')
  const [text,setText]=useState("")
  const [available,setAvailable]=useState(true)
  const close=(<Close />)
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
  const [vendorlist,setVendorList]=useState([])

  useEffect(()=>{

    const getPosts = async () => {
      const data = await getDocs(VCollectionRef);
      //console.log(data);
      setVendorList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();

  },[])

  const [docid,setDocId]=useState("")

  const handleStatus=async()=>{
    const text=vendorlist.filter((p)=>p.userid===vendorid)
    console.log("id",text[0].id);
    const updateData = doc(db,"vendor-detail",text[0].id)
      await updateDoc(updateData,{status:"not available"})
  }



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
                  <li><button >Recent orders</button></li>
                  <li><button>Feedbacks</button></li>    
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
      
    </div>
  )
}

export default VendorDash
