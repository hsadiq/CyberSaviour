import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Main Concern"
        title="Web Development"
        text="“Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.”"
        btnText="Start today"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Proposed Solution"
        title="Hardware/Network Solution"
        text="User Management
              Security Monitoring & Response
              Software License Management
              24/7 System Monitoring
              Software Deployment & Updates
              Hardware Inventory
              System Usage/Reliability Reporting
              User Training
              Hardware installation
              Full-time onsite support"
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle=""
        title="Cyber Security"
        text="We Providing your Project to Security From All Kind of Attack and Threats"
        btnText="Read more"
      />
      <Footer />
    </>
  );
};
