import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import "./components/HeroSection.css";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Calculator from "./components/pages/projects/Calculator";
import TicTacToe from "./components/pages/projects/TicTacToe";
import ToDo from "./components/pages/projects/ToDo";
import Weather from "./components/pages/projects/Weather/Weather";
import ComingSoon from "./ComingSoon";




function App() {

  

  return (
    <>
      <div className="app-container">
        <Router>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
