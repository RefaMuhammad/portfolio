import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { expertiseData } from "../../../data/RoleData";
import "./SpecializedRole.css";
import { Link } from "react-router-dom";

const CardRoles = ({ id, title, description, techStacks, index }) => {
  return (
    <div className="role-card" data-aos="fade-up" data-aos-delay={index * 100}>
      <h2 className="role-title">{title}</h2>
      <p className="role-description">{description}</p>
      <Link to={`/Roles/${id}`} className="view-link">
        VIEW DETAILS &gt;
      </Link>
    </div>
  );
};

// Komponen Utama
const SpecializedRole = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="specialized-section">
      <div className="specialized-container">
        <h1 className="main-heading" data-aos="fade-down">
          Specialized Roles
        </h1>

        <div className="roles-grid">
          {expertiseData.map((role, index) => (
            <CardRoles
              key={role.id}
              id={role.id}
              title={role.title}
              description={role.description}
              techStacks={role.techStacks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializedRole;
