import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Working from "./components/Working";
import CustomCursor from "./components/CustomCursor";
import "./styles/CustomCursor.css";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const App = () => {
  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: "#section2",
  //     start: "top top",
  //     end: "bottom top",

  //     onEnter: () =>
  //       gsap.to("body", { backgroundColor: "#fff", duration: 1 }),
  //     onLeave: () =>
  //       gsap.to("body", { backgroundColor: "#000", duration: 1 }),
  //     onLeaveBack: () =>
  //       gsap.to("body", { backgroundColor: "#000", duration: 1 }),
  //     onEnterBack: () =>
  //       gsap.to("body", { backgroundColor: "#fff", duration: 1 }),
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  const lenis = useLenis(({ scroll }) => {});
  return (
    <>
      <ReactLenis root>
        <CustomCursor />

        <div className="topContainer">
          <Navbar />
          <Hero />
        </div>

        <Introduction />
        <Working />
        <Testimonial />
        <Faq />
        <Footer />
      </ReactLenis>
    </>
  );
};

export default App;
