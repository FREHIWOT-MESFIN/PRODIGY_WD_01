import React from 'react';
import './clients.css';
import quote from '../../assets/icons/quote.png';
import rate from '../../assets/icons/rating2.png';
import testimonials from './testimonials';



function Clients() {

  return (
    <div className='client-section'>
      <div className="headline">
        <h1>Our Happy Clients</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      
      <div className="testimonial-container">
          {testimonials.map((testimonial) => (
            <div className="testimonial" key={testimonial.id}>
              <img className='quote' src={quote} alt="quote" />
              <p>{testimonial.comment}</p>
              <div className="profile">
                <img src={testimonial.imgUrl} alt="profile" />
                <div className="other">
                  <h5>{testimonial.name}</h5>
                  <img src={rate} alt="rating" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Clients;
