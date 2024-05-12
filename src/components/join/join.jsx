import React from 'react'
import './join.css'
function Join() {
  return (
    <div className='join-section'>
      <div className="join-headline">
        <h1>Join With Us</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <div className="join-content">
        <div className="jvideo">
            <div className="playbtn"><i className="fa-solid fa-play fa-2xl"></i></div>
            <video src="/assets/assets/videos/furniture.mp4"></video>
        </div>
        <div className="jform">
            <input type="email" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'/>
            <input type="button" value="Sign Up" />
        </div>
      </div>
    </div>
  )
}

export default Join
