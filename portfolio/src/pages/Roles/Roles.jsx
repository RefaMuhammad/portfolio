import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import RoleHero from "../../components/ui/RoleHero/RoleHero";
import TechStack from "../../components/ui/TechStack/TechStack";
import Footer from "../../components/ui/Footer/Footer";
import { expertiseData } from "../../data/RoleData";

const Roles = () => {
  const { id } = useParams();
  const roleData = expertiseData.find((item) => item.id === parseInt(id));

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const h1 = useTransform(scrollYProgress, [0.0, 0.5], ["0%", "100%"]);
  const h2 = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);
  const h3 = useTransform(scrollYProgress, [0.2, 0.7], ["0%", "100%"]);
  const h4 = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "100%"]);
  const h5 = useTransform(scrollYProgress, [0.4, 0.9], ["0%", "100%"]);
  const blindHeights = [h1, h2, h3, h4, h5];

  const techOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
  const techY = useTransform(scrollYProgress, [0.75, 0.95], [30, 0]);

  if (!roleData) {
    return (
      <h2 style={{ textAlign: "center", padding: "100px" }}>Role not found!</h2>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <div ref={containerRef} style={{ height: "250vh", position: "relative" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "#fcfcfc",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <RoleHero
              title={roleData.title}
              description={roleData.description}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {blindHeights.map((height, index) => (
              <div
                key={index}
                style={{
                  height: "20%",
                  width: "100%",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <motion.div
                  style={{
                    width: "100%",
                    height: height,
                    backgroundColor: "#050505",
                  }}
                />
              </div>
            ))}
          </div>

          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              opacity: techOpacity,
              y: techY,
              pointerEvents: "auto",
              overflowY: "auto",
            }}
          >
            
              <TechStack techStacks={roleData.techStacks} />
            
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roles;
