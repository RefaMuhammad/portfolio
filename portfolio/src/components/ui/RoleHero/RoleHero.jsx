import React from "react";
import { motion } from "framer-motion";
import "./RoleHero.css"; // Pastikan nama file CSS-mu benar

const RoleHero = ({ title, description }) => {
  return (
    <div className="RoleHero-container">
      <motion.div
        className="RoleHero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="RoleHero-title">{title}</h1>
        <p className="RoleHero-description">{description}</p>
      </motion.div>
    </div>
  );
};

export default RoleHero;
