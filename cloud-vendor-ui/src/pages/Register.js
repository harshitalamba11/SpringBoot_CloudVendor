import react from 'react';
import Header from '../components/header';
import {useState} from 'react';
const Register=()=>{
    const [vendorId, setVendorId] = useState("");
    const [vendorName, setVendorName] = useState("");
    const [vendorAddress, setVendorAddress] = useState("");
    const [vendorPhoneNumber, setVendorPhoneNumber] = useState("");

    function submit(e){
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
            alert("Vendor Registered Successfully!");
            console.log(data);
        }).catch(err=>console.log(err));
        // console.log(vendor);
        setVendorId("");
        setVendorName("");
        setVendorPhoneNumber("");
        setVendorAddress("");
    }
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
                <button onClick={submit} id="submit_register">Register</button>
            </div>
            
        </>
    )
}
export default Register;