import NavBar from "../firstpage/Navbar";
import Footer from "../Footer";
import React, { useState } from 'react';
import Card from './Card';
import PayPal from './Paypal';
import './Payement.css';

function Payment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isPaypalVisible, setIsPaypalVisible] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Payment Method:', selectedPaymentMethod);
    alert(`Payment method selected: ${selectedPaymentMethod}`);
  };

  const showCard = () => setIsCardVisible(true);
  const hideCard = () => setIsCardVisible(false);
  const showPaypal = () => setIsPaypalVisible(true);
  const hidePaypal = () => setIsPaypalVisible(false);

  return (
    <>
      <NavBar />
      <div className="payment-container">
        <div className="payment-details">
          <h1 className="payment-title">PAYMENT</h1>
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="contactNumber">CONTACT NUMBER</label>
            <input type="text" name="contactNumber" id="contactNumber" />
            <label htmlFor="emailId">EMAIL ID</label>
            <input type="email" name="emailId" id="emailId" />
          </div>
          <h1 className="payment-method-title">PAYMENT METHOD</h1>
          <div>
            <button onClick={showCard} className="show-card-button">DEBIT OR CREDIT</button>
            {isCardVisible && <Card onClose={hideCard} />}
          </div>
          <div>
            <button onClick={showPaypal} className="show-paypal-button">PAYPAL</button>
            {isPaypalVisible && <PayPal onClose={hidePaypal} />}
          </div>
        </div>

        <div className="order-summary">
          <h1 className="order-title">Your Order</h1>
          <div className="order-details"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
