import projectsData from "../../../data/ProjectData";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const Projects = () => {
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
    <div className="container">
      <div
        className="content"
        data-aos={isScrollingDown ? "fade-right" : "fade-left"}
      >
        <div className="header">
          <span>Featured</span>
          <h1>Projects.</h1>
        </div>
      </div>

      <div className="projects-list">
        {projectsData.map((project, index) => {
          const isOdd = index % 2 === 0;

          if (isOdd) {
            return (
              <div
                className="project-card-odd"
                key={project.id}
                data-aos="fade-up"
              >
                <div className="image-container-odd">
                  <img src={project.imageSrc} alt={project.title} />
                </div>
                <div className="floating-card">
                  <span className="mission-id">{project.missionId}</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="view-link"
                  >
                    VIEW PROJECT &gt;
                  </a>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="project-card-even"
                key={project.id}
                data-aos="fade-up"
              >
                <div className="text-container-even">
                  <span className="mission-id">{project.missionId}</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>

                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="view-link dark-link"
                  >
                    VIEW PROJECT &gt;
                  </a>
                </div>
                <div className="image-container-even">
                  <img src={project.imageSrc} alt={project.title} />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
