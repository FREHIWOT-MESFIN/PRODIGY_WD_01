import React from 'react';
import './sponsor.css';

function Sponsor() {
  let skills = ['slack', 'uber eats', 'Microsoft', 'ICT Hub'];

  return (
    <div className='sponsor-sec'>
      <h1>Our Sponsors</h1>
      <div className="skill-display">
        {skills.map(skill => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  );
}

export default Sponsor;
