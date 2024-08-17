import React, { useState, useEffect } from 'react';
import './clients.css';
import quote from '../../assets/icons/quote.png';
import rate from '../../assets/icons/rating2.png';
import testimonials from './testimonials';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'



function Clients() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='client-section'>
      <div className="headline">
        <h1>Our Happy Clients</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      
      <div className="testimonial-container">
        {isMobile ? (
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 40
              }
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial">
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
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          testimonials.map((testimonial) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default Clients;
