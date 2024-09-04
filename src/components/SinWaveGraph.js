import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SineWaveGraph = () => {
    const sectionRef = useRef(null);
    const curveRef = useRef(null);
    const gridLinesRef = useRef([]);
    const textRefs = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        const curve = curveRef.current;
        const gridLines = gridLinesRef.current;
        const texts = textRefs.current;

        const pathLength = curve.getTotalLength();

        // Set initial stroke-dasharray and dashoffset for the sine wave animation
        gsap.set(curve, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });

        // Set initial opacity for the text elements
        gsap.set(texts, { opacity: 0, y: 20 });

        // Animate the sine wave and reveal the text elements
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
        });

        tl.to(curve, { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" }).to(
            texts,
            { opacity: 1, y: 0, stagger: 0.2 },
            0.5,
        );

        // Subtle grid line animation
        gsap.to(gridLines, {
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "none",
            opacity: 0.8,
            stagger: 0.1,
        });
    }, []);

    const gridLines = Array.from({ length: 10 }, (_, i) => i);

    return (
        <>
            <div className='app-container'>


                <section
                    ref={sectionRef}
                    className='full-height sinewave-graph-section'>
                    <div className='curve-container'>
                        <svg viewBox='0 0 500 200' className='w-full'>
                            {/* Grid Background */}
                            {gridLines.map((_, index) => (
                                <line
                                    key={index}
                                    ref={(el) => (gridLinesRef.current[index] = el)}
                                    x1={index * 50}
                                    y1='0'
                                    x2={index * 50}
                                    y2='200'
                                    stroke='#ccc'
                                    strokeWidth='0.5'
                                    opacity='0.5'
                                />
                            ))}
                            {gridLines.map((_, index) => (
                                <line
                                    key={index + 10}
                                    ref={(el) => (gridLinesRef.current[index + 10] = el)}
                                    x1='0'
                                    y1={index * 20}
                                    x2='500'
                                    y2={index * 20}
                                    stroke='#ccc'
                                    strokeWidth='0.5'
                                    opacity='0.5'
                                />
                            ))}
                            {/* Sine Wave */}
                            <path
                                ref={curveRef}
                                d='M0,100 Q50,50 100,100 T200,100 T300,100 T400,100 T500,100'
                                fill='none'
                                stroke='#FF4500'
                                strokeWidth='4'
                                strokeLinecap='round'
                            />
                        </svg>
                        <div className='text-container'>
                            {["Data Collection", "Data Analysis", "Insight Generation", "User Feedback"].map(
                                (text, index) => (
                                    <div
                                        key={index}
                                        ref={(el) => (textRefs.current[index] = el)}
                                        className='text-item'>
                                        <div className='text-number'>{`00${index + 1}`}</div>
                                        <div className='text-label'>{text}</div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </section>



                <style jsx>{`
          .app-container {
            width: 100%;
            overflow-x: hidden;
          }
          .full-height {
            height: 130vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .intro-section,
          .outro-section {
            background-color: #f0f0f0;
            color: #333;
            text-align: center;
          }
          .sinewave-graph-section {
            color: white;
          }
          .curve-container {
            width: 90%;
            max-width: 800px;
            position: relative;
          }
          .text-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }
          .text-item {
            text-align: center;
          }
          .text-number {
            font-size: 1.2rem;
            font-weight: bold;
          }
          .text-label {
            font-size: 1rem;
          }
        `}</style>
            </div>
        </>
    );
};

export default SineWaveGraph;
