import React from 'react';
import './hero.css'

function Hero() {
  return (
    <div className='hero-section'>
       <div className="hero">
        <div className="hero-copy">
            <h1>Make Your Place A Better Living</h1>
            <p>urban crafty furniture with modern, simple and elegant designs for your home</p>
            <button className="butbtn">Buy Now</button>
        </div>
        <div className="socials">
            <a href="https://www.facebook.com/" rel="noreferrer" target='_blank'><img src="/assets/assets/icons/facebook.png" alt="facebook" /></a>
            <a href="https://www.instagram.com/" rel="noreferrer" target='_blank'><img src="/assets/assets/icons/instagram.png" alt="instagram" /></a>
            <a href="https://twitter.com/?lang-en" rel="noreferrer" target='_blank'><img src="/assets/assets/icons/twitter.png" alt="twitter" /></a>
        </div>
       </div>
    </div>
  )
}

export default Hero
