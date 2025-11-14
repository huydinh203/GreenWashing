import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <Footer />
    </>
  );
}

export default HomePage;
