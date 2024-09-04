import React from "react";
import "../styles/Footer.css";
import HeAR_AI from "../assets/footer/HeAR_AI.png";
import line from "../assets/introduction/line.png";
import facebook from "../assets/footer/facebook.png";
import instagram from "../assets/footer/instagram.png";
import twitter from "../assets/footer/twitter.png";
import linkedin from "../assets/footer/linkedin.png";
import arrow from "../assets/footer/arrow.png";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerLogo">
          <img src={HeAR_AI} className="footerLogo"></img>
        </div>
        <div className="footerLine">
          <img src={line}></img>
        </div>
        <div className="quickLinks">
          <div className="quickLinkContainer">
            <img src={arrow} className="arrowImg"></img>
            <p>About Us</p>
          </div>
          <div className="quickLinkContainer">
            <img src={arrow} className="arrowImg"></img>
            <p>Contact Us</p>
          </div>
          <div className="quickLinkContainer">
            <img src={arrow} className="arrowImg"></img>
            <p>FAQ</p>
          </div>
          <div className="quickLinkContainer">
            <img src={arrow} className="arrowImg"></img>
            <p>Privacy Policy</p>
          </div>
          <div className="quickLinkContainer">
            <img src={arrow} className="arrowImg"></img>
            <p>Support</p>
          </div>
        </div>
        <div className="footerLine">
          <img src={line}></img>
        </div>
        <div className="socials">
          <div className="socialMainBtn">
            <img src={facebook} className="socialImg"></img>
            <button className="socialBtn">Facebook</button>
          </div>
          <div className="socialMainBtn">
            <img src={instagram} className="socialImg"></img>
            <button className="socialBtn">Instagram</button>
          </div>
          <div className="socialMainBtn">
            <img src={twitter} className="socialImg"></img>
            <button className="socialBtn">Twitter</button>
          </div>
          <div className="socialMainBtn">
            <img src={linkedin} className="socialImg"></img>
            <button className="socialBtn">LinkedIn</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;