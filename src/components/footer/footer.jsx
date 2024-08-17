import React from 'react'
import './footer.css'
import facebookimg from '../../assets/icons/facebook.png';
import instaimg from '../../assets/icons/instagram.png';
import twitterimg from '../../assets/icons/twitter.png';

function Footer() {
  return (
    <div className='footer-section'>
      <div className="first">
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
      </div>

      <div className="second">
        <div className="copywrite">
            &copy; {new Date().getFullYear()} lynch consulting ltd
        </div>
        <div className="footer-socials">
            <span>  imprint | privacy </span>
            <div>
              <a href="https://www.facebook.com/" rel="noreferrer" target='_blank'><img src={facebookimg} alt="facebook" /></a>
              <a href="https://www.instagram.com/" rel="noreferrer" target='_blank'><img src={instaimg} alt="instagram" /></a>
              <a href="https://twitter.com/?lang-en" rel="noreferrer" target='_blank'><img src={twitterimg} alt="twitter" /></a>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
