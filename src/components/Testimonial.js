import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Testimonial.css";
import Card1 from "../assets/Testi/card1.png";
import line from "../assets/Testi/line.png";
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  const images = [Card1, Card1, Card1, Card1];

  useEffect(() => {
    const sections = gsap.utils.toArray(sectionsRef.current);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='TestiContainer' ref={containerRef}>
      <p className='testiHeader'>Testimonials®</p>
      <img src={line} className='testiLine' />
      {images.map((image, index) => (
        <div
          className='TestiPanel'
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}>
          <img
            className='TestiImage'
            src={image}
            alt={`Testimonial ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
