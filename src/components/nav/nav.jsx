import { useState } from 'react';
import './nav.css';

//import { Link } from 'react-router-dom'

function Nav() {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <div className='nav'>
      <div className="ham-menu" onClick={handleClick}>
        <i className = {`ri-menu-line ${isActive ? '' : 'active'}`}  ></i>
        <i className={`ri-close-large-line ${isActive ? '' : 'active'}`}></i>
      </div>
      <div className="logo">
        <span>AE</span> Furnishers
      </div>
      <div>
        <ul className={`${isActive ? '' : 'active'}`}>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>FAQ</li>
            <li>Contacts</li>
        </ul>
      </div>
      <div >
        <button className="butbtn">Buy Now</button>
      </div>
    </div>
  )
}

export default Nav;
