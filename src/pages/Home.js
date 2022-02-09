import React from 'react';
import '../App.css';
import Cards from '../components/Cards.js';
import HeroSection from '../components/HeroSection';
// import Footer from '../components/Footer'; Called in App.js 
// import Navbar from '../components/Navbar'; Called in App.js 

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
