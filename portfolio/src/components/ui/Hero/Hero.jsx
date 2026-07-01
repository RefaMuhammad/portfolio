// src/components/ui/Hero.jsx
import React, { useState, useEffect } from "react";
import "./Hero.css";

// Struktur data diubah menjadi objek berpasangan
const rolesData = [
  {
    role: "AI Engineering",
    passionate: "building intelligent systems and vision models",
  },
  {
    role: "Penetration Testing",
    passionate: "securing systems and finding vulnerabilities",
  },
  {
    role: "Research & Development",
    passionate: "innovating and exploring cutting-edge technology",
  },
  {
    role: "Backend Developer",
    passionate: "designing scalable APIs and robust architectures",
  },
  {
    role: "Mobile Developer",
    passionate: "creating seamless mobile user experiences",
  },
  {
    role: "Website Developer",
    passionate: "crafting responsive and beautiful web solutions",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimationIn, setIsAnimationIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimationIn(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rolesData.length);
        setIsAnimationIn(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-subtitle">
          <span
            key={
              currentIndex
            } 
            className={`hero-subtitle-inner ${isAnimationIn ? "fade-in" : "fade-out"}`}
          >
            I'm into <strong>{rolesData[currentIndex].role}</strong> passionate
            <br />
            about {rolesData[currentIndex].passionate}
          </span>
        </p>

        <h1 className="hero-title">
          <span className="text-hi">HI!</span>
          <span className="text-name">REFA.</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
