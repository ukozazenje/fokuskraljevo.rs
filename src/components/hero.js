import React from 'react';
import heroImg from '../images/bg-fokus.jpg';

const Hero = () => (
  <div className="hero-img">
    <img src={heroImg} />
    <div className="container">
      <div className="hero-text">
        <h1 className="hero-heading-one">SA NAMA</h1>
        <h1 className="hero-heading-two">SVE POSTAJE </h1>
        <h1 className="hero-heading-three">JASNIJE</h1>
        <span className="sub-heading">Najsvremeniji način</span>
        <span className="sub-heading">operisanja katarakte</span>
      </div>
    </div>
  </div>
)

export default Hero;
