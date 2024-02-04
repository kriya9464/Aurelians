import { Button } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth, db } from '../firebase-config';
import './CSS/vendor_login.css'
function Vendor() {

    const [cat,setCat]=useState("salon")
const [show,setShow]=useState(false);
const [gender,setGender] = useState("Female");
const [age, setAge]= useState("");

const [locality, setLocality]= useState("")
const [Country, setCountry]= useState("")
const [address, setAddress]= useState("")
const [city, setCity]= useState("")
const [state, setState]= useState("")
const [pin, setPin]= useState("")
const [name,setName]=useState("")
const [profile,setProfile]=useState(null)
const [contact, setContact]=useState("")

    let navigate = useNavigate();
    const detailCollectionRef = collection(db, "vendor-detail")
    const handleSubmit=async()=>{
        await addDoc(detailCollectionRef, {gender, age, cat, locality, address, city,Country,contact, state, pin, name,userid: auth.currentUser.uid,photo:auth.currentUser.photoURL,status:"Available" })
        localStorage.setItem("userid", auth.currentUser.uid);
        navigate("/VendorDash")
    }
  return (
    <div className='vendor-login' >
        <h2>Basic Details:</h2>
        <form action="">
            <div className="details">
            <label htmlFor="">Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            
            </div>
            <div className="details">
                <label htmlFor="">Profile image</label>
                <input type="file" onChange={(e)=>setProfile(e.target.files[0])}/>
            </div>
            <div className="details">
            <label htmlFor="">Gender:</label>
            <select id="inputState" className="selection" onClick={(e)=>setGender(e.target.value)}>
      <option>female</option>
      <option >male</option>
      <option>other</option>
      
      </select>
            </div>
            <div className="details">
            <label htmlFor="">Age:</label>
            <input type="text" onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className="details">
            <label htmlFor="">Category:</label>
            <select id="inputState" className="selection" onClick={(e)=>setCat(e.target.value)}>
      <option>salon</option>
      <option>tailor</option>
      
      
    </select>
            </div>
            <div className="details">
                <label htmlFor="">Mobile number:</label>
                <input type="text" onChange={(e)=>setContact(e.target.value)}/> 
            </div>
            <div className="details">
            <label htmlFor="">Address:</label>
            <input type="text" onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            {/* <div className="details">
            <label htmlFor="">Locality:</label>
            <input type="text" onChange={(e)=>setLocality(e.target.value)} />
            </div>
            <div className="details">
            <label htmlFor="">City:</label>
            <input type="text" onChange={(e)=>setCity(e.target.value)}/>
            </div> */}
            <div className="details">
            <label htmlFor="">pin:</label>
            <input type="text" onChange={(e)=>setPin(e.target.value)}/>
            </div>
            {/* <div className="details">
            <label htmlFor="">State:</label>
            <input type="text" onChange={(e)=>setState(e.target.value)}/>
            </div>
            <div className="details">
            <label htmlFor="">Country:</label>
            <input type="text" onChange={(e)=>setCountry(e.target.value)}/>
            </div> */}
            <Button onClick={handleSubmit}>Submit</Button> 
            </form>
    </div>
  )
}

export default Vendor