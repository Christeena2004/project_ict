import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Home.css';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import Advertisement from './Advertisement';
import TopCategories from './TopCategories';
import Footer from '../Footer';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="Home">
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
          <Advertisement />
          <TopCategories />
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
