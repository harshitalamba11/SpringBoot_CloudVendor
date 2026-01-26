import React ,{useState , useEffect} from 'react';
import Header from '../components/header';
import { useNavigate,useParams } from 'react-router-dom';
import Update from './Update';

const UpdatedForm=()=>{
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const {id}=useParams();
    const [data,setdata]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:8080/CloudVendor/${id}`)
        .then(res=>res.json())
        .then(r=>{ setName(r.data.vendorName);
                setAddress(r.data.vendorAddress);
                setPhone(r.data.vendorPhoneNumber);}
            )},[id]);
    const submit=()=>{
        const vendor = {
            vendorId: id,
            vendorName: name,
            vendorAddress: address,
            vendorPhoneNumber: phone
        };
        fetch('http://localhost:8080/CloudVendor',
            {method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(vendor)
        })
        .then(res=>res.text())
        .then(data=>{
            // alert("Vendor Registered Successfully!");
            console.log(data);
        }).catch(err=>console.log(err));
        navigate('/update');
    }
    return(
        <>
        <Header/>
        <div>
            <div>
                <label>VendorId</label>
                <input type="text" value={id} readOnly></input>
            </div>
            <div>
                <label>VendorName</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
            </div>
            <div>
                <label>VendorAddress</label>
                <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)}></input>
            </div>
            <div>
                <label>VendorPhoneNumber</label>
                <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
            </div>
            <div className="submit_update">
                <button onClick={submit}>Update</button>
            </div>
        </div>
        </>
    )
}

export default UpdatedForm;