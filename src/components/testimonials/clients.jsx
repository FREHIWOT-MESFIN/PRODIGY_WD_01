import React from 'react'
import './clients.css'
import testimonials from './testimonials'

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
//const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
 // modules: [Navigation, Pagination],
 // ...
//});

function Clients() {
  return (
    <div className='client-section'>
      <div className="headline">
        <h1>Our Happy Clients</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index)=>(
            <div className="testimonial" key={index}>
                <img className='quote' src="/assets/assets/icons/quote.png" alt="quote" />
                <p>{testimonial.comment}</p>
                <div className="profile">
                    <img src={testimonial.imgUrl} alt="" />
                    <div className="other">
                        <h5>{testimonial.name}</h5>
                        <img src="/assets/assets/icons/rating2.png" alt="rating" />
                    </div>
                   
                </div>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Clients
