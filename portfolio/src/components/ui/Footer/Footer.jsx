import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaThLarge,
} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = ({ theme = "light" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => (e) => {
    e.preventDefault();

    // Jika sedang di Home
    if (location.pathname === "/") {
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }

      setTimeout(() => ScrollTrigger.refresh(), 700);
      return;
    }

    // Jika sedang di halaman lain
    navigate(`/#${id}`);
  };

  return (
    <footer className={`footer-container ${theme}`}>
      <div className="footer-top">
        <div className="footer-left">
          <h2>
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            AMAZING TOGETHER!
          </h2>

          <div className="social-icons">
            <a
              href="https://github.com/RefaMuhammad"
              target="_blank"
              rel="noreferrer"
              className="icon-box"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/refa-muhammad"
              target="_blank"
              rel="noreferrer"
              className="icon-box"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/refa.muhammad_/"
              target="_blank"
              rel="noreferrer"
              className="icon-box"
            >
              <FaInstagram />
            </a>
            <a href="mailto:refamuhammadr@gmail.com" className="icon-box">
              <FaEnvelope />
            </a>
          </div>

          <p className="copyright">
            © 2026 Refa Muhammad. All Rights Reserved.
          </p>
        </div>

        <div className="footer-right">
          <h3>MENU</h3>
          <nav className="footer-nav">
            <a href="#home" onClick={scrollToSection("home")}>
              HOME
            </a>
            <a href="#specialized" onClick={scrollToSection("specialized")}>
              SPECIALIZED
            </a>
            <a href="#projects" onClick={scrollToSection("projects")}>
              PROJECTS
            </a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <h1 className="giant-text">REFA.</h1>
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
