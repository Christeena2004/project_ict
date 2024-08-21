// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import NavBar from '../firstpage/Navbar';
import ProductDetails from './Product_Details';
import VegProductDetails from './veg_details';
import Footer from '../Footer';
import MeatProductDetails from './Meat';

function Main() {
  return (
    <>
    <NavBar />
    <ProductDetails />
    <VegProductDetails />
    <MeatProductDetails />
    <Footer />
    </>
    
);
}

export default Main;
