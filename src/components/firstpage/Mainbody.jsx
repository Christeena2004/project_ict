import { Link } from "react-router-dom";
import './Mainbody.css';

function MainBody() {
  return (
    <div className="main-body">
      <div> 
        <h1 className="main-heading">MAKE HEALTHY<br />LIFE WITH FRESH<br />GROCERY.</h1>
        <div className="description">
          <p>
            We understand that life can be busy, and finding time to shop for groceries can be challenging.
            <br />
            That's why we've created a convenient and easy-to-use online platform to bring your groceries 
            <br />
            right to your doorstep.
          </p>
          <Link to='/Home'>
            <button className="shop-button">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
