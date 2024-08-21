import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
function NavBar(){
    return (
        <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" className="navbar-logo-image"/>
          <h1>GreenBasket</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Category">Menu</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li><Link to="/Login">Sign up</Link></li>

        </ul>
      </nav>
    )
}
export default NavBar;
