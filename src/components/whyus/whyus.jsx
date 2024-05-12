import React from 'react';
import './whyus.css';

function WhyUs() {
  return (
    <div className='Whyus-section'>
      <div className="why-headline">
        <h1>Why Choose Us?</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <div className="why-list">
        <div className="wlist">
            <div className="l1">
                <img src="/assets/assets/icons/badge.png" alt="badge" />
                <h3>Quality</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui aspernatur maiores neque fuga distinctio tenetur pariatur aperiam.
                </p>
                <button>More</button>
            </div>
            <div className="l2">
                <img src="/assets/assets/icons/shield.png" alt="shield" />
                <h3>Longetivity</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui aspernatur maiores neque fuga distinctio tenetur pariatur aperiam.
                </p>
                <button>More</button>
            </div>
            <div className="l3">
                <img src="/assets/assets/icons/partners.png" alt="" />
                <h3>Community</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui aspernatur maiores neque fuga distinctio tenetur pariatur aperiam.
                </p>
                <button>More</button>
            </div>
        </div>
        <div className="wbullet"></div>
      </div>
    </div>
  )
}

export default WhyUs
