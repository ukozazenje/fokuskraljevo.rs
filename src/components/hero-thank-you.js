import React from 'react';
import heroImg from '../images/bg-fokus.jpg';

const Hero = () => (
  <div className="hero-img">
    <img src={heroImg} />
    <div className="container">
      <div className="hero-text">
        <h1 className="hero-heading-one">Hvala na</h1>
        <h1 className="hero-heading-two">interesovanju</h1>
      </div>
    </div>
  </div>
)

export default Hero;
