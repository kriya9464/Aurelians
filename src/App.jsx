
import {BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Explore from './pages/Explore'
import UserDash from './pages/user_dashboard/userDash'
import Measure from './pages/user_dashboard/Measure'
import ServicePage from './pages/ServicePage'
import VendorDash from './pages/vendor_dashboard/VendorDash'
import './App.css'
import JoinAs from './pages/JoinAs'
import Vendor from './pages/Vendor'
import Customer from './pages/Customer'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
//import Map from './pages/Map';
import RouteMap from './pages/RouteMap'

function App() {
  const [userid, setUserId]=useState("")
  const [postId,setPostId]=useState("")
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [postadd,setPostAdd]=useState("")
  const [pincode,setPincode]=useState("")
  const [imgUrl,setImgUrl] =useState([])

  const [add,setAdd] = useState('')
    // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
            const {latitude,longitude} = pos.coords;
            console.log(latitude,longitude)
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            fetch(url).then(res=>res.json()).then(data=>{setAdd(data.display_name);setPincode(data.address.postcode)})
        })
    },[])
    console.log(postadd,"sfsfh")

  return (
    <Router>

      <Navbar isAuth={isAuth}/>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Explore' element={<Explore setUserId={setUserId} setPostId={setPostId} add={add} setPostAdd={setPostAdd} pincode={pincode}/>}></Route>
        <Route path='/userDashboard' element={<UserDash />}></Route>
        <Route path='/Measurement' element={<Measure />}></Route>
        <Route path={`/ServicePage/${userid}`} element={<ServicePage userid={userid} postId={postId}/>}></Route>
        <Route path='/VendorDash' element={<VendorDash postId={postId}/>}></Route>
        <Route path='/joinas' element={<JoinAs />}></Route>
        <Route path='/vendor' element={<Vendor />}></Route>
        <Route path='/customer' element={<Customer />}></Route>
        <Route path='/routemap' element={<RouteMap postadd={postadd} add={add}/>}></Route>
      </Routes>
        
    </div>
    </Router>
  )
}

export default App
