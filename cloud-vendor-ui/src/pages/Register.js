import React from 'react';
import Header from '../components/header';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Register=()=>{
    const navigate=useNavigate();
    const [vendorId, setVendorId] = useState("");
    const [vendorName, setVendorName] = useState("");
    const [vendorAddress, setVendorAddress] = useState("");
    const [vendorPhoneNumber, setVendorPhoneNumber] = useState("");
    const [message,setmessage]=useState("");
    function back_function(){
        navigate('/');
    }
    async function verify() {
  try {
    const res = await fetch(`https://cloud_vendor_info.onrender.com/CloudVendor/${vendorId}`);
    console.log(res.status);
    if (res.status === 200) {
      // Vendor already exists
      console.log("exists");
      return false;
    }

    if (res.status === 404) {
      // Vendor does not exist
      return true;
    }

    return false;
  } catch (err) {
    console.error(err);
    return true;
  }
}


    async function submit(e){
        //validate
        if(vendorId==="" || vendorName==="" || vendorAddress==="" || vendorPhoneNumber===""){
            setTimeout(()=>setmessage("!!! Fill complete Details !!!"),1000);
            return;
        }
        //check is the id present or not
        const isValid = await verify();
        if (!isValid) {
            setmessage("Already Exists!!");
            // console.log("exists");
            setfree();
            return;
        }
        e.preventDefault();
        
        const vendor = {
            vendorId,
            vendorName,
            vendorAddress,
            vendorPhoneNumber
        };
        fetch("https://cloud_vendor_info.onrender.com/CloudVendor",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(vendor)
        }).then(res=>res.text())
        .then(data=>{
            // alert("Vendor Registered Successfully!");
            console.log(data);
        }).catch(err=>console.log(err));
        // console.log(vendor);
        setfree();
    }
    function setfree(){
        setVendorId("");
        setVendorName("");
        setVendorPhoneNumber("");
        setVendorAddress("");
    }
    useEffect(() => {
        if (message === "") return;
        const timer = setTimeout(() => {
            setmessage("");
        }, 3000);
        return () => clearTimeout(timer);
    }, [message]);

    return (
  <>
    <Header />

    <div className="register-container">
      <div className="register-card">
        <h2 className="form-title">Vendor Registration</h2>

        <div className="form-group">
          <label>Vendor ID</label>
          <input
            type="text"
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
            placeholder="Enter Vendor ID"
          />
        </div>

        <div className="form-group">
          <label>Vendor Name</label>
          <input
            type="text"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            placeholder="Enter Vendor Name"
          />
        </div>

        <div className="form-group">
          <label>Vendor Address</label>
          <input
            type="text"
            value={vendorAddress}
            onChange={(e) => setVendorAddress(e.target.value)}
            placeholder="Enter Address"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={vendorPhoneNumber}
            onChange={(e) => setVendorPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="form-buttons">
          <button className="btn secondary" onClick={back_function}>
            Back
          </button>
          <button className="btn primary" onClick={submit}>
            Register
          </button>
        </div>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  </>
);
}
export default Register;