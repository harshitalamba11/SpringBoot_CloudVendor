import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useNavigate } from 'react-router-dom';

const Update=()=>{
    const navigate=useNavigate();
    const [data,setdata]=useState([]);
    useEffect(()=>{fetch("http://localhost:8080/CloudVendor")
    .then(response=>response.json())
    .then(result=>{
        setdata(result);
    }).catch(err=>console.log(err));
},[]);

    function back_function(){
        navigate('/');
    }
    function updation(id){
        fetch(`http://localhost:8080/CloudVendor`,{method:"PUT"})
        .then(response=>{
            if(!response.ok){
                throw new Error("Delete failed");
            }
            setdata(res=>res.filter(v=>v.vendorId!==id));
        }).catch(err => console.error(err));
    }
    return(
        <>
            <Header/>
            <div className="container_delete">
            <div className="box">
                {data.map((vendor,index)=>(
                    <div className="box_item" key={index}>
                        <div className="labels">
                            <p>VendorId : {vendor.vendorId}</p>
                            <p>VendorName : {vendor.vendorName}</p>
                        </div>
                        <button onClick={()=>updation(vendor.vendorId)} className="button_update">Update</button>
                    </div>
                ))}
            </div>
            <div className="buttons_form_delete">
                    <button onClick={()=>back_function()} id="back_button_delete">Back</button>
                    {/* <button onClick={submit} id="submit_register">Register</button> */}
            </div>
            </div>
        </>
    )
}
export default Update;