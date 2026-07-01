import React from "react";
import ProfileSection from "../../components/layout/ProfileSection/ProfileSection";
import Certificates from "../../components/layout/Certificate/Certificates";
import Footer from "../../components/ui/Footer/Footer";

const About = () => {
  return (
    <div className="container-profile rounded-b-2xl overflow-hidden bg-black">
      <ProfileSection />
      <Certificates />
      <Footer theme="dark" />
    </div>
  );
};

export default About;
