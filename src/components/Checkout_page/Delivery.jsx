import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Delivery.css';

function Delivery() {
  const [selectedState, setSelectedState] = useState('');

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal"
  ];

  const sortedStates = statesOfIndia.sort();

  return (
    <div className="delivery-container">
      <div className="delivery-background">
        <div className="delivery-content">
          <div className="delivery-image">
            {/*<img src="https://content.jdmagicbox.com/comp/def_content/malls/6358814573398819641902243095-young-woman-with-shopping-bags-4-e1408941566529-malls-4-sun1v.jpg" alt="shopping" /> */}
          </div>
          <div className="delivery-details">
            <div className="customer-details">
              <h1 style={{color:'black',marginTop:'10px'}}>CUSTOMER DETAILS</h1>
              <div className="form-group">
                <label htmlFor="firstName" style={{color:'black'}}>First Name</label>
                <input type="text" placeholder="Enter the first name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" style={{color:'black'}}>Last Name</label>
                <input type="text" placeholder="Enter the last name" />
              </div>
              <h1 style={{color:'black',marginTop:'10px'}}>CONTACT INFORMATION</h1>
              <div className="form-group">
                <label htmlFor="contactNumber" style={{color:'black'}}>Contact Number</label>
                <input type="number" placeholder="Enter phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{color:'black'}}>Email ID</label>
                <input type="email" placeholder="Enter email id" />
              </div>
            </div>
            <div className="delivery-address">
              <h1 style={{color:'black'}}>DELIVERY ADDRESS</h1>
              <div className="form-group">
                <label htmlFor="houseName" style={{color:'black'}}>House Name</label>
                <input type="text" placeholder="Enter house name/flat name" />
              </div>
              <div className="form-group">
                <label htmlFor="pincode" style={{color:'black'}}>Pincode</label>
                <input type="text" placeholder="Enter pincode" />
              </div>
              <div className="form-group">
                <label htmlFor="country" style={{color:'black'}}>Country</label>
                <input type="text" placeholder="Enter country" />
              </div>
              <div className="form-group">
                <label htmlFor="statesDropdown" style={{color:'black'}}>State</label>
                <select id="statesDropdown" value={selectedState} onChange={handleChange}>
                  <option value="" disabled>Kerala</option>
                  {sortedStates.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <Link to='/proceed'>
                <button className="proceed-button">PROCEED TO PAY</button>
              </Link>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
