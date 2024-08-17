import React from 'react';
import './about.css';
import img1 from '../../assets/images/pexels-maksim-goncharenok-4352247.jpg';
import img2 from '../../assets/images/pexels-dalila-dalprat-2179214.jpg'

function AboutUs() {
  return (
    <div className='about-section'>
      <div className="about-copy">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusantium et culpa sunt odio,
             totam quae earum perspiciatis,
             assumenda delectus provident praesentium nam! Corporis cum ipsam quos nulla in nobis?</p>
      </div>
      <div className="about-img">
        <img src={img1} alt="sofa" />
        <img src={img2} alt="chair" />
      </div>
    </div>
  )
}

export default AboutUs
