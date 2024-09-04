import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Splitting from 'splitting';
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  const lineRefs = useRef([]);
  const cellRefs = useRef([]);

  useEffect(() => {
    Splitting({ target: heroRef.current, by: 'lines' });
    const lines = heroRef.current.querySelectorAll('.word');

    // Initial state setup for animation
    gsap.set(lines, { y: 200, opacity: 0 });
    gsap.set(lineRefs.current, { scaleX: 0 });
    gsap.set(cellRefs.current, { opacity: 0 }); // Set opacity for image cells

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate text first
    tl.to(lines, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
    })
    .to(lineRefs.current, {
      scaleX: 1,
      duration: 1,
      stagger: 0.1,
    }, 0.5)
    // Animate image cells to reveal horizontally row by row
    .to(cellRefs.current, {
      opacity: 1, // Fade in the image rows
      duration: 1,
      stagger: 0.5, // Stagger the animation for each row
    }, 0.75);

    return () => tl.kill();
  }, []);

  const createImageCells = () => {
    const cells = [];
    for (let i = 0; i < 3; i++) {  // We have 3 rows
      cells.push(
        <div 
          key={i} 
          className="image-cell" 
          ref={el => cellRefs.current[i] = el} // Reference to GSAP animations
        ></div>
      );
    }
    return cells;
  };

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="text-column">
          <h1><span ref={el => textRefs.current.push(el)}>Nebula</span></h1>
          <h4>Fluidity</h4>
        </div>
        <div className="separator" ref={el => lineRefs.current.push(el)}></div>
        <div className="text-column">
          <h1><span ref={el => textRefs.current.push(el)}>ORGANIC</span></h1>
          <h4>Dreamscape</h4>
        </div>
        <div className="separator" ref={el => lineRefs.current.push(el)}></div>
        <div className="text-column">
          <h1><span ref={el => textRefs.current.push(el)}>Fusion</span></h1>
          <h4>Nature's</h4>
        </div>
        <div className="separator" ref={el => lineRefs.current.push(el)}></div>
        <div className="text-column">
          <h1><span ref={el => textRefs.current.push(el)}>Elixir</span></h1>
        </div>
      </div>
      <div className="hero-image">
        {createImageCells()}
      </div>
    </div>
  );
};

export default Hero;
