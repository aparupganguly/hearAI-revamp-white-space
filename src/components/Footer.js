import React, { useEffect, useRef } from "react";
import "../styles/Footer.css";
import HeAR_AI from "../assets/footer/HeAR_AI.png";
import line from "../assets/introduction/line.png";
import gsap from "gsap";

const Footer = () => {
  const socialBtnsRef = useRef([]);

  useEffect(() => {
    socialBtnsRef.current.forEach((item) => {
      let span = item.querySelector("span");
      let tl = gsap.timeline({ paused: true });

      tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
      tl.set(span, { yPercent: 150 });
      tl.to(span, { duration: 0.2, yPercent: 0 });

      item.addEventListener("mouseenter", () => tl.play(0));
    });
  }, []);

  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <img src={HeAR_AI} className="footerLogo" alt="HeAR AI" />
      </div>
      <div className="footerLine">
        <img src={line} alt="Line" />
      </div>
      <div className="quickLinks">
        <div className="quickLinkContainer">
          <p>About Us</p>
        </div>
        <div className="quickLinkContainer">
          <p>Contact Us</p>
        </div>
        <div className="quickLinkContainer">
          <p>FAQ</p>
        </div>
        <div className="quickLinkContainer">
          <p>Privacy Policy</p>
        </div>
        <div className="quickLinkContainer">
          <p>Support</p>
        </div>
      </div>
      <div className="footerLine">
        <img src={line} alt="Line" />
      </div>
      <div className="socials">
        <div
          className="socialMainBtn"
          ref={(el) => socialBtnsRef.current.push(el)}
        >
          <button className="socialBtn"><span>Facebook</span></button>
        </div>
        <div
          className="socialMainBtn"
          ref={(el) => socialBtnsRef.current.push(el)}
        >
          <button className="socialBtn"><span>Instagram</span></button>
        </div>
        <div
          className="socialMainBtn"
          ref={(el) => socialBtnsRef.current.push(el)}
        >
          <button className="socialBtn"><span>Twitter</span></button>
        </div>
        <div
          className="socialMainBtn"
          ref={(el) => socialBtnsRef.current.push(el)}
        >
          <button className="socialBtn"><span>LinkedIn</span></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
