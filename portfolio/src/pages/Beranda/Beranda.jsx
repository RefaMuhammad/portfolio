// src/pages/Beranda.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import Hero from "../../components/ui/Hero/Hero";
import AboutMe from "../../components/ui/AOS_AboutMe/AboutMe";
import SpecializedRole from "../../components/ui/SpecializedRole/SpecializedRole";
import Projects from "../../components/ui/Projects/Projects";
import Footer from "../../components/ui/Footer/Footer";
import "./Beranda.css";

gsap.registerPlugin(ScrollTrigger);

const Beranda = () => {
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".section-pinned");

      panels.forEach((panel) => {
        let innerpanel = panel.querySelector(".section-inner");
        let panelHeight = innerpanel.offsetHeight;
        let windowHeight = window.innerHeight;
        let difference = panelHeight - windowHeight;

        let fakeScrollRatio =
          difference > 0 ? difference / (difference + windowHeight) : 0;

        if (fakeScrollRatio) {
          panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
        }

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "bottom bottom",
            end: () =>
              fakeScrollRatio ? `+=${innerpanel.offsetHeight}` : "bottom top",
            pinSpacing: false,
            pin: true,
            scrub: true,
          },
        });

        if (fakeScrollRatio) {
          tl.to(innerpanel, {
            yPercent: -100,
            y: windowHeight,
            duration: 1 / (1 - fakeScrollRatio) - 1,
            ease: "none",
          });
        }

        tl.fromTo(
          panel,
          { scale: 1, opacity: 1 },
          { scale: 0.7, opacity: 0.5, duration: 0.9 },
        ).to(panel, { opacity: 0, duration: 0.1 });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const timer = setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        ScrollTrigger.refresh();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <main ref={mainRef} className="slides-wrapper">
      {/* SECTION 1: ABOUT ME */}
      <section id="home" className="section section-1 section-pinned">
        <div className="section-content">
          <div className="section-inner">
            <Hero />
            <AboutMe />
          </div>
        </div>
      </section>

      {/* SECTION 2: Roles */}
      <section id="specialized" className="section section-2 section-pinned">
        <div className="section-content">
          <div className="section-inner content-putih">
            <SpecializedRole />
          </div>
        </div>
      </section>
      {/* SECTION 3: Projects */}
      <section id="projects" className="section section-3">
        <div className="section-content">
          <div className="section-inner content-putih">
            <Projects />
          </div>
        </div>
      </section>
      {/* SECTION 4: FOOTER */}
      <section className="section section-4">
        <div className="section-content">
          <div className="section-inner content-putih">
            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Beranda;
