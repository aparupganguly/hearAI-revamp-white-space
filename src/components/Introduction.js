import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Introduction.css";
import line from "../assets/introduction/line.png";
import image1 from "../assets/introduction/image1.png";
import image2 from "../assets/introduction/image2.png";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
    useEffect(() => {
        let sections = gsap.utils.toArray(".introSection");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".introContent",
                start: "top top",
                end: "bottom =+12- ",
                scrub: true,
                markers: true,
                pin: ".introductionMainContainer",
                ease: "easeInOut",
                end: () => "+=" + sections.length + 0.7 * sections[0].offsetHeight,
            },
        });

        sections.slice(1).forEach((section) => {
            tl.fromTo(
                section,
                {
                    yPercent: 0,
                },
                {
                    yPercent: -100,
                    duration: 1,
                }
            );
        });
    }, []);

    return (
        <div className="introductionMainContainer">
            <div className="introTitle">
                <p id="line1">Introduction</p>
                <p id="line2">to Google's HeAR AI</p>
            </div>
            <div className="introContent">
                <div className="introSection introContent1">
                    <img className="introLine" src={line} alt="Line Decoration" />
                    <p>
                        An innovative AI platform that analyzes bioacoustic data (like
                        coughs and breathing) to detect and monitor health conditions,
                        offering a non-invasive, intuitive approach to healthcare.
                    </p>
                    <img className="introImage" src={image1} alt="Introduction Image 1" />
                    <h1>001.</h1>
                </div>
                <div className="introSection introContent2">
                    <h1>002.</h1>
                    <img className="introImage" src={image2} alt="Introduction Image 2" />
                    <p>
                        Early detection and continuous monitoring of health conditions,
                        transforming sound into actionable insights for better global health
                        outcomes.
                    </p>
                    <img className="introLine" src={line} alt="Line Decoration" />
                </div>
                <div className="introSection introContent3">
                    <img className="introLine" src={line} alt="Line Decoration" />
                    <p>
                        User-Friendly Design: Intuitive interface that simplifies complex
                        health information.
                    </p>
                    <img className="introImage" src={image1} alt="Introduction Image 3" />
                    <h1>003.</h1>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
