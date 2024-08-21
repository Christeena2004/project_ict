import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/Homepage/Home'
import Firstpage from './components/firstpage/Firstpage';
import Account from './components/login/Account';
import Final from './components/Checkout_page/Final';
import Payement from './components/Checkout_page/Payement';
import Main from './components/Product/Main';
import Wishlist from './components/Wishlist/Wishlist';
import AdminPage from './components/Admin/Adminpage';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Firstpage />} />
        <Route exact path="/Login" element={<Account />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/payments" element={<Final />} />
        <Route exact path="/proceed" element={<Payement/>} />
        <Route exact path="/Category" element={<Main />} />
        <Route exact path="/wishlist" element={<Wishlist/>} />
        <Route exact path="/adminpage" element={<AdminPage/>} />
        <Route exact path="/signup" element={<Login />} />
      </Routes>
    </Router>
  );
}



export default App;
