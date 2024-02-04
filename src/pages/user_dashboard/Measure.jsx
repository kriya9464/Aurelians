import React, { useState } from 'react'
import './measure.css'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../firebase-config'
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
const Measure = ({tailor}) => {
  let navigate = useNavigate();
const [bust,setBust]=useState("")
const [waist,setWaist]=useState("")
const [upperwaist,setUpperWaist]=useState("")
const [neck,setNeck]=useState("")
const [upperhip,setUpperHip]=useState("")
const [shoulder,setShoulder]=useState("")
const [arm,setArm]=useState("")
const [wrist,setWrist]=useState("")
const [frontbodice,setFrontBodice]=useState("")
const [backbodice,setBackBodice]=useState("")
const [hiptoknee,setHipToKnee]=useState("")
const [inseam,setInseam]=useState("")
const [hiptoankle,setHipToAnkle]=useState("")

console.log(tailor)


  const measureCollectionRef = collection(db, "measurement-detail")
  const VID=localStorage.getItem("vendorid")
const handleSave=async()=>{
  console.log("inside")
  await addDoc(measureCollectionRef, {bust,waist,upperwaist,neck,upperhip,shoulder,arm,wrist,frontbodice,backbodice,hiptoknee,inseam,hiptoankle,userid: auth.currentUser.uid,photo:auth.currentUser.photoURL,VID})
  console.log("inside2")
  setBust("")
  setWaist("")
  setUpperWaist("")
  setNeck("")
  setUpperHip("")
  setShoulder("")
  setArm("")
  setWrist("")
  setFrontBodice("")
  setBackBodice("")
  setHipToKnee("")
  setInseam("")
  setHipToAnkle("")
  //navigate('/userDashboard')

}

  return (
    <div className='measure-page'>
      <div>
      <h1>Fill in your Measurements</h1>
      
      <form action="" className='measure-form'>
        <label htmlFor="">Bust</label><input type="text" value={bust} onChange={(e)=>setBust(e.target.value)}/>
        <label htmlFor="">Waist</label><input type="text" value={waist} onChange={(e)=>setWaist(e.target.value)}/>
        <label htmlFor="">Upper Waist</label><input type="text" value={upperwaist} onChange={(e)=>setUpperWaist(e.target.value)}/>
        <label htmlFor="">Neck</label><input type="text" value={neck} onChange={(e)=>setNeck(e.target.value)} />
        <label htmlFor="">Upper Hip</label><input type="text" value={upperhip} onChange={(e)=>setUpperHip(e.target.value)} />
        <label htmlFor="">Shoulder</label><input type="text" value={shoulder} onChange={(e)=>setShoulder(e.target.value)}/>
        <label htmlFor="">Arm</label><input type="text" value={arm} onChange={(e)=>setArm(e.target.value)}/>
        <label htmlFor="">Wrist</label><input type="text" value={wrist} onChange={(e)=>setWrist(e.target.value)}/>
        <label htmlFor="">Front Bodice</label><input type="text" value={frontbodice} onChange={(e)=>setFrontBodice(e.target.value)}/>
        <label htmlFor="">Back bodice</label><input type="text" value={backbodice} onChange={(e)=>setBackBodice(e.target.value)}/>
        <label htmlFor="">Hip to Knee</label><input type="text" value={hiptoknee} onChange={(e)=>setHipToKnee(e.target.value)}/>
        <label htmlFor="">Inseam</label><input type="text" value={inseam} onChange={(e)=>setInseam(e.target.value)}/>
        <label htmlFor="">Hip to Ankle</label><input type="text" value={hiptoankle} onChange={(e)=>setHipToAnkle(e.target.value)}/>
        <Button onClick={handleSave}>Save</Button>
      </form>
      </div>
      <div className="measure-sample">
        <img src="https://thefoldline.com/wp-content/uploads/2018/12/Body-measurement-chart-full-5.png" alt="" />
      </div>
      
    </div>
  )
}

export default Measure
