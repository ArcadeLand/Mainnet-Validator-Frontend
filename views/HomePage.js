import React from "react";

// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import HeroSection from "views/HeroSection";
import StatsSection from "views/StatsSection";
import ChainsSection from "views/ChainsSection";

export default function Index() {
  
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <HeroSection/>
        <StatsSection/>
        <ChainsSection/>
        <Footer />
      </div>
    </>
  );
}
