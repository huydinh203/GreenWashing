import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import About from "./components/About";
import Impact from "./components/Impact";
import Survey from "./components/Survey";
import Footer from "./components/Footer";
import Maps from "./components/Maps";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <StatsSection />
      <Impact />
      <Survey />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
