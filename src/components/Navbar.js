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
<<<<<<< HEAD
      <img src={logo} alt="" className="logo" />
=======
      <img src={logo} alt="Logo" className="logo" />
>>>>>>> 8e5ed206cf4cb4e6d98c60dbe616901fe7b9f617
      <p className="navText">Transforming Sound into Health Insights</p>
      <div className="navLinks">
        <p>Mechanism</p>
        <p>Impact</p>
        <p>Testimonials</p>
      </div>
      <div className="rightButtonContainer">
<<<<<<< HEAD
        <button className="navButton">Discover Now</button>
=======
        <button className="navButton" ref={navButtonRef}>
          <span>Discover Now</span>
        </button>
>>>>>>> 8e5ed206cf4cb4e6d98c60dbe616901fe7b9f617
        <div className="btnLine"></div>
      </div>
    </div>
  );
};

export default Navbar;
