import React from "react";
import logo from "../assets/hero/logo.png";
import heroBg from "../assets/hero/heroBg.png";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img src={logo} alt="" className="logo" />
      <p className="navText">Transforming Sound into Health Insights</p>
      <div className="navLinks">
        <p>Mechanism</p>
        <p>Impact</p>
        <p>Testimonials</p>
      </div>
      <div className="rightButtonContainer">
        <button className="navButton">Discover Now</button>
        <div className="btnLine"></div>
      </div>
    </div>
  );
};

export default Navbar;
