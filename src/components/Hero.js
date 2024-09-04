import React from "react";
import "../styles/Hero.css";
import heroHuman from "../assets/hero/heroHuman.png";
const Hero = () => {
  return (
    <div className='heroContainer '>
      <div className='heroTextContainer'>
        <p className='F'>
          Revolutionalizing
          <span className='heroHealthWord'>Health</span>
        </p>
        <p className='bottomHeroText'>
          Diagnostics with <span className='heroAiWord'>AI</span>
        </p>
      </div>
      <p className='harnessText'>
        Harnessing biacoustic data for a healthier world
      </p>
      <img src={heroHuman} alt='' className='heroHuman' />
    </div>
  );
};

export default Hero;
