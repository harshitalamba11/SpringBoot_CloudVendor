import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useNavigate } from 'react-router-dom';

const Details=()=>{
    const navigate=useNavigate();
    const [data,setdata]=useState([]);
    const [filterdata,setfilterdata]=useState([]);
    const [input, setInput] = useState("");

    useEffect(()=>{
        fetch(`http://localhost:8080/CloudVendor`,{method:"GET"})
        .then(res=>res.json()).then(r=>{setdata(r);setfilterdata(r)}).catch(err=>{console.log(err)});
    },[]);

    function back_function(){
        navigate('/');
    }

    useEffect(()=>{
        const filtered=data.filter(v=>v.vendorId.toLowerCase().includes(input.toLowerCase())|| v.vendorName.toLowerCase().includes(input.toLowerCase()));
        setfilterdata(filtered);
    },[input,data]);
    return(
        <>
        <Header/>
        <div className="search_div">
            <input type="text" placeholder="Search with id or name" className="searchbar" value={input} onChange={(e)=>setInput(e.target.value)}></input>
        </div>
            <div className="container_delete">
            <div className="box">
                {filterdata.length>0 ? 
                (filterdata.map((vendor,index)=>(
                    <div className="box_item" key={index}>
                        <div className="labels">
                            <p>VendorId : {vendor.vendorId}</p>
                            <p>VendorName : {vendor.vendorName}</p>
                        </div>
                    </div>
                ))):(
                <div className="message_display"><p id="message_m">No Data found !!</p></div>)
            }
            </div>
            {/* <div className="message_entry"><p id="message_m">{message}</p></div> */}
            <div className="buttons_form_delete">
                <button onClick={()=>back_function()} id="back_button_delete">Back</button>
            </div>
            </div>
        </>
    )
}

export default Details;