import React from 'react';
import './Card.css'; // Adjust the path as necessary for your project

const Card = ({ onClose }) => {
  return (
      <div className="Card-overlay">
        <div className="Card-content">
            <h2 style={{marginTop:'20px'}}>CARD PAYMENT</h2>
        
        
            <div style={{display:'grid',
                justifyContent:'center',
                padding:'150px',
                color:'black',
                backgroundColor:'white',
                marginLeft:'85px',
                marginRight:'450px',
                height:'550px',
                boxShadow:'0 0 25px rgba(0, 0, 0, 2)',
                marginBottom:'20px'
                }}>
          <img src="https://png.pngitem.com/pimgs/s/13-130192_major-credit-cards-transparent-hd-png-download.png" alt="cardss" width={'250px'} height={'80px'} />
        
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
            <div style={{display:'grid',marginTop:'10px'}}>
                <label htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                
                />
            </div>
            <div style={{display:'grid',marginTop:'10px'}}>
                <label htmlFor="expiryDate">Expiry Date</label>
                    <div style={{display:'flex',width:'10px',marginRight:'100px'}}>    
                        <input
                            type="number"
                            id="expiryDate"
                            name="expiryDate"
                            size={'30px'}
                            style={{width:'30px'}}
                            placeholder="M"/>
                        <input
                            type="number"
                            id="expiryDate"
                            name="expiryDate"
                            style={{width:'30px'}}
                            placeholder="M"
                        />
                        <input
                            type="number"
                            id="expiryDate"
                            name="expiryDate"
                            style={{width:'30px'}}
                            placeholder="Y"
                        />
                        <input
                            type="number"
                            id="expiryDate"
                            name="expiryDate"
                            style={{width:'30px'}}
                            placeholder="Y"
                        />
                        </div>
                    </div>
                    
                    <div style={{display:'grid',marginTop:'10px'}}>
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            
                        />
                    </div>
                
                {/* <button type="submit" className="submit-button" style={{display:'grid',marginTop:'10px'}}>Submit Payment</button> */}
        
        </div>
        
        
        
        <button onClick={onClose} >Submit payment</button>
      </div>
    </div>
  );
};

export default Card;