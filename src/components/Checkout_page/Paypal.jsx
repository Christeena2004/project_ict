import React from 'react';
import './PayPal.css'; // Adjust the path as necessary for your project

const PayPal = ({ onClose }) => {
  return (
      <div className="PayPal-overlay">
        <div className="PayPal-content">
        <h2>PayPal PAYMENT</h2>
        
        
        <div style={{display:'grid',
                justifyContent:'center',
                padding:'150px',
                color:'black',
                backgroundColor:'white',
                marginLeft:'85px',
                marginRight:'700px',
                height:'600px',
                boxShadow:'0 0 25px rgba(0, 0, 0, 2)',
                marginBottom:'20px',
                marginTop:'20px'
                }}>

                <div style={{display:'flex', fontFamily:'cursive', fontStyle:'italic',justifyContent:'center',padding:'1px',backgroundColor:'orange',borderRadius:'100px',marginTop:'1px'}}>
                    <h1 style={{color:'darkblue'}}>Pay</h1>
                    <h1 style={{color:'#007bff'}}>Pal</h1>
                </div>

          {/* <h1 >Payment </h1>          */}
            <div style={{display:'grid',marginTop:'10px'}}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                
                />
            </div>
            <div style={{display:'grid',marginTop:'10px'}}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                
                />
            </div>
            <div style={{display:'grid',marginTop:'10px',marginBottom:'10px'}}>
                <label htmlFor="PayPalNumber">Phone Number</label>
                <input
                    type="text"
                    id="PayPalNumber"
                    name="PayPalNumber"
                
                />
            </div>

            <div>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png" alt="qr" width={'150px' } height={'150px'} />
            </div>
            
                    
                    
                
                {/* <button type="submit" className="submit-button" style={{display:'grid',marginTop:'10px'}}>Submit Payment</button> */}
        
        </div>
        
        
        
        <button onClick={onClose} >SUBMIT PAYMENT</button>
      </div>
    </div>
  );
};

export default PayPal;