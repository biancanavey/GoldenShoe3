import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>I'm running late and I don't need an excuse</h1>
      <p>'Cause I'm wearing my brand new shoes</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Shop Womens
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Shop Mens
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
