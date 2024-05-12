import React from 'react';
import './about.css';

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
        <img src="/assets/assets/images/pexels-maksim-goncharenok-4352247.jpg" alt="sofa" />
        <img src="/assets/assets/images/pexels-dalila-dalprat-2179214.jpg" alt="chair" />
      </div>
    </div>
  )
}

export default AboutUs
