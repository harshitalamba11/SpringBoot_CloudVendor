import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Delete from './pages/delete';
import Details from './pages/Details';
import Update from "./pages/Update";

function App() {
  const [vendorId, setVendorId] = useState("");
  const [vendor, setVendor] = useState(null);
  const getVendor = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/CloudVendor/${vendorId}`
      );
      const data = await response.json();
      setVendor(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/delete' element={<Delete/>}></Route>
          <Route path='/details' element={<Details/>}></Route>
          <Route path='/update' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <div className="container">
      <h2>Cloud Vendor App</h2>

      <input
        type="text"
        placeholder="Enter Vendor ID"
        value={vendorId}
        onChange={(e) => setVendorId(e.target.value)}
      />

      <button onClick={getVendor} >Get Vendor</button>

      {vendor && (
        <div className="card">
          <p><b>ID:</b> {vendor.vendorId}</p>
          <p><b>Name:</b> {vendor.vendorName}</p>
          <p><b>Address:</b> {vendor.vendorAddress}</p>
          <p><b>Phone:</b> {vendor.vendorPhoneNumber}</p>
        </div>
      )}
      </div> */}
    </>
  );
}

export default App;
