import React ,{useState , useEffect} from 'react';
import Header from '../components/header';
import { useNavigate,useParams } from 'react-router-dom';

const UpdatedForm=()=>{
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const {id}=useParams();
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
    function back_function(){
        navigate('/update');
    }
    return (
  <>
    <Header />
    <div className="form-container1">
      <div className="form-card1">
        <h2 className="form-title1">Update Vendor</h2>

        <div className="form-group1">
          <label>Vendor ID</label>
          <input type="text" value={id} readOnly />
        </div>

        <div className="form-group1">
          <label>Vendor Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group1">
          <label>Vendor Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-group1">
          <label>Vendor Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="submit_update1">
          <button onClick={submit}>Update Vendor</button>
        </div>
      </div>
      <div className="buttons_form_delete">
                <button onClick={()=>back_function()} id="back_button_delete">Back</button>
        </div>
    </div>
  </>
);

}

export default UpdatedForm;