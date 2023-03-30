import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import "./components/HeroSection.css";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {

  

  return (
    <>
      <div className="app-container" data-sal="slide-up" data-sal-delay="500">
        <Router>
          <Navbar />
          <AnimatedRoutes />
        </Router>
      </div>
    </>
  );
}

export default App;
