import React, { useState } from 'react';
import './nav.css';
//import { Link } from 'react-router-dom'

function Nav() {
  const [hamMenu, sethamMenu] = useState(document.querySelector('.nav ul'));

  const hamClick = ()=>{
     if(hamMenu.classList.contains('active')){
      sethamMenu.classList.remove('active')
     }else{
      sethamMenu.classList.add('active')
     }
  }
  return (
    <div className='nav'>
      <div className="ham-menu" onClick={hamClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="logo">
        <span>AE</span> Furnishers
      </div>
      <div className="navMenu">
        <ul>
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
