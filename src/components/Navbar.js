import React, { useEffect, useRef } from "react";
import logo from "../assets/hero/logo.png";
import gsap from "gsap";
import "../styles/Navbar.css";

const Navbar = () => {
  const navButtonRef = useRef(null);

  useEffect(() => {
    const span = navButtonRef.current.querySelector("span");

    const tl = gsap.timeline({ paused: true });
    tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
    tl.set(span, { yPercent: 150 });
    tl.to(span, { duration: 0.2, yPercent: 0 });

    navButtonRef.current.addEventListener("mouseenter", () => tl.play(0));
  }, []);

  return (
    <div className="navbarContainer">
      <img src={logo} alt="Logo" className="logo" />
      <p className="navText">Transforming Sound into Health Insights</p>
      <div className="navLinks">
        <p>Mechanism</p>
        <p>Impact</p>
        <p>Testimonials</p>
      </div>
      <div className="rightButtonContainer">
        <button className="navButton" ref={navButtonRef}>
          <span>Experience Now</span>
        </button>
        <div className="btnLine"></div>
      </div>
    </div>
  );
};

export default Navbar;
