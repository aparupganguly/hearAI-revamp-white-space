import React, { cloneElement } from "react";
import "../styles/Hero.css";
import hero from "../assets/hero/Group 52.png";
const Hero = () => {
  return (
    <>
      <div className='heroContainer'>
        <img src={hero} className='heroImg' />
      </div>
      <p style={{ color: "white", textAlign: "center", fontFamily: "ngp-55" }}>
        Experience
        <span style={{ color: "#5AD183", fontFamily: "ngp-55" }}>HeAR AI</span>
        Today
      </p>
    </>
  );
};

export default Hero;
