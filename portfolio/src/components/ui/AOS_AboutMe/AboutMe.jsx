import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css";

const AboutMe = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  const lastScrollY = useRef(0);
  const currentDirection = useRef(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: false,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollingDown = scrollY > lastScrollY.current;

      if (
        scrollingDown !== currentDirection.current &&
        Math.abs(scrollY - lastScrollY.current) > 5
      ) {
        currentDirection.current = scrollingDown;
        setIsScrollingDown(scrollingDown);

        setTimeout(() => AOS.refresh(), 50);
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="aboutme-container">
      <div
        className="content"
        data-aos={isScrollingDown ? "fade-right" : "fade-left"}
      >
        <div className="header">
          <span>ABOUT</span>
          <h1>ME.</h1>
        </div>
      </div>

      <div
        className="description-container"
        data-aos={isScrollingDown ? "fade-up" : "fade-down"}
        data-aos-delay="200"
      >
        <p className="description-text">
          Passionate about exploring the latest technology trends across AI,
          cybersecurity, and software engineering. I specialize in building
          secure, intelligent systems and crafting dynamic cross-platform
          experiences that leave a lasting impact.
        </p>
        <Link to="/about" className="read-bio-link">
          READ FULL BIO &rarr;
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
