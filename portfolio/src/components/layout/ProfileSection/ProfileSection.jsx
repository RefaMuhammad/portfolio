// src/components/ProfileSection.jsx

import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProfileSection.css";
import { expertiseData } from "../../../data/RoleData";

const ProfileSection = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);

  const lastScrollY = useRef(0);
  const currentDirection = useRef(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
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

        setTimeout(() => {
          AOS.refresh();
        }, 50);
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % expertiseData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentRole]);

  return (
    <section className="profile-section">
      {/* Background Text */}
      <div
        className="bg-text-profile"
        data-aos={isScrollingDown ? "fade-right" : "fade-left"}
      >
        PROFILE
      </div>

      <div className="profile-content">
        {/* LEFT */}
        <div className="profile-left">
          <span className="subtitle" data-aos="fade-right" data-aos-delay="100">
            Who I Am
          </span>

          <h1 className="title" data-aos="fade-right" data-aos-delay="200">
            I'm
            <br />
            Refa M
          </h1>

          <h2
            key={currentRole}
            className="role"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            {expertiseData[currentRole].title}
          </h2>

          <div
            className="action-buttons"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              className="connect-btn"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/refa-muhammad",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Let's Connect
              <span className="arrow-icon">&#x2197;</span>
            </button>

            <a
              className="cv-btn"
              href="https://drive.google.com/uc?export=download&id=1wfj7co-KwSUEmc2JQr7RTxLT1TZnOJC6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <span className="arrow-icon">&#x2193;</span>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="profile-right"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <p>
            Hi there! You can call me <strong>Refa Muhammad</strong> or{" "}
            <strong>Refa</strong>. I'm an Informatics Engineering student
            passionate about bridging the gap between cutting-edge R&D and
            practical software solutions. My expertise spans across AI
            engineering, cybersecurity, and full-stack development. I specialize
            in designing optimized architectures for intelligent systems and
            building secure, dynamic applications. I am highly familiar with
            technologies such as{" "}
            <span className="highlight-python">Python</span>,{" "}
            <span className="highlight-pytorch">PyTorch</span>, and modern
            frameworks like <span className="highlight-nextjs">Next.js</span>.
            Let's connect and collaborate on some exciting projects together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
