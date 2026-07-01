import React from "react";
import "./ExpEducation.css";
import experienceData from "../../../data/ExperienceData";
import educationData from "../../../data/EducationData";
import GhostCursor from "../GhostCursor/GhostCursor";

const ExpEducation = () => {
  return (
    <section className="exp-education">
      <span className="exp-education-watermark">PROFESSIONAL JOURNEY</span>

      {/* =========================================
          BAGIAN EXPERIENCE 
          ========================================= */}
      <div className="exp-container">
        <h1 className="exp-title">Experience</h1>
        {experienceData.map((exp) => (
          <div key={exp.id} className="exp-education-content">
            <div className="exp-education-header">
              <p>{exp.date}</p>
              <h1>{exp.role}</h1>
              <p>{exp.company}</p>
            </div>
            <div className="exp-education-description">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================
          BAGIAN EDUCATION 
          ========================================= */}
      <div className="education-container">
        <h1 className="exp-title">Education</h1>

        {/* Container pembungkus agar ada jarak (gap) antar kotak */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Mapping data education */}
          {educationData.map((edu) => (
            <div key={edu.id} className="edu-card-content">
              {/* Komponen efek GhostCursor akan dirender di masing-masing kotak */}
              <GhostCursor color="#a0a0a0" zIndex={1} />

              <div className="edu-card-left">
                <span className="edu-date">{edu.date}</span>
                <h1 className="edu-school">{edu.school}</h1>
              </div>

              <div className="edu-card-right">{edu.major}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpEducation;
