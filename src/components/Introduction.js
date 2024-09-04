import React from "react";
import "../styles/Introduction.css";
import line from "../assets/introduction/line.png";
import image1 from "../assets/introduction/image1.png";
import image2 from "../assets/introduction/image2.png";
import image3 from "../assets/introduction/image3.png";
import introBg3 from "../assets/introduction/introBg3.png";

const Introduction = () => {
  return (
    <div className='introductionMainContainer'>
      <div className='introTitle'>
        <p id='line1'>Introduction</p>
        <p id='line2'>
          to Google's
          <span className='hearIntro'>HeAR AI</span>
        </p>
      </div>
      <div className='introContent'>
        <div className='introContent1'>
          <img className='introLine' src={line}></img>
          <p className='intro1'>
            An innovative AI platform that analyzes<span className="green">bioacoustic data (like
            coughs and breathing)</span>to detect and monitor health conditions,
            offering a non-invasive, intuitive approach to healthcare.
          </p>
          <img className='introImage' src={image1}></img>
          <h1>001.</h1>
        </div>
        <div className='introContent2'>
          <h1>002.</h1>
          <img className='introImage' src={image2}></img>
          <p className='intro2'>
            <span className="red">Early detection</span>and <span className="red">continuous monitoring</span> of health conditions,
            <span className="red">transforming sound into actionable insights</span> for better global health
            outcomes.
          </p>
          <img className='introLine' src={line}></img>
        </div>
        <div className='introContent3'>
          <img className='introLine' src={line}></img>
          <p className='intro3'>
            <span className="yellow">User-Friendly Design</span>: Intuitive interface that simplifies complex
            health information.
          </p>
          <img className='introImage' src={image3}></img>
          <h1>003.</h1>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
