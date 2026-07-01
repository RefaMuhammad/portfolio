import React from "react";
import ProfileSection from "../../components/layout/ProfileSection/ProfileSection";
import Certificates from "../../components/layout/Certificate/Certificates";
import ExpEducation from "../../components/ui/ExpEducation/ExpEducation";
import Footer from "../../components/ui/Footer/Footer";

const About = () => {
  return (
    <div className="container-profile rounded-b-2xl overflow-hidden bg-black">
      <ProfileSection />
      <ExpEducation />
      <Certificates />
      <Footer />
    </div>
  );
};

export default About;
