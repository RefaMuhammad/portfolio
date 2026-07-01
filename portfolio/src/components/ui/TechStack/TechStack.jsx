import React from "react";
import "../../../pages/Roles/Roles.css";

const TechStack = ({ techStacks }) => {
  if (!techStacks || techStacks.length === 0) return null;

  return (
    <div className="tech-stack-wrapper">
      <div className="tech-stack-content">
        <div className="pill-badge">CORE TECHNOLOGY</div>

        <div className="tech-grid">
          {techStacks.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-icon">❖</div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-detail">{tech.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
