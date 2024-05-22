import React from 'react'
import './clients.css'
import testimonials from './testimonials'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Clients() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
   
    <div className='client-section'>
      <div className="headline">
        <h1>Our Happy Clients</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      
      <div className="testimonial-container">
      <Slider {...settings}>
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
      </Slider>
      </div>
     
    </div>
  
  )
}

export default Clients
