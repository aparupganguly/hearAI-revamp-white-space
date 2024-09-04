import React from "react";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className='heroTextContainer'>
        <p className='topHeroText'>Revolutionalizing Health</p>
        <p className='bottomHeroText'>
          Diagnostics with <span className='heroAiWord'>AI</span>
        </p>
      </div>
      <p 
      
      className ="harnessText">harnessing biacoustic data for a healthier world</p>
    </div>
  );
};

export default Hero;
