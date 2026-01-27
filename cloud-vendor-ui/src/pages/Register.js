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
    const res = await fetch(`http://localhost:8080/CloudVendor/${vendorId}`);
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
        fetch("http://localhost:8080/CloudVendor",{
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

    return(
        <>
            <Header/>
            <div className="register_form">
                <div className="blocks_fill" id="register_form_id">
                    <h3 className="label">VendorId</h3>
                    <input className="input" value={vendorId} onChange={(e)=>setVendorId(e.target.value)} type="text" placeholder="VendorId"></input>
                </div>
                <div className="blocks_fill" id="register_form_name">
                    <h3 className="label">VendorName</h3>
                    <input className="input" value={vendorName} onChange={(e)=>setVendorName(e.target.value)} type="text" placeholder="VendorName"></input>
                </div>
                <div className="blocks_fill" id="register_form_id">
                    <h3 className="label">VendorAddress</h3>
                    <input className="input" value={vendorAddress} onChange={(e)=>setVendorAddress(e.target.value)} type="text" placeholder="Address"></input>
                </div> 
                <div className="blocks_fill" id="register_form_id">
                    <h3 className="label">VendorPhoneNumber</h3>
                    <input className="input" value={vendorPhoneNumber} onChange={(e)=>setVendorPhoneNumber(e.target.value)} type="text" placeholder="PhoneNumber"></input>
                </div>
                <div className="buttons_form">
                    <button onClick={back_function} id="back_button">Back</button>
                    <button onClick={submit} id="submit_register">Register</button>
                </div>
            </div>
            <div className='message'>{message}</div>
        </>
    )
}
export default Register;