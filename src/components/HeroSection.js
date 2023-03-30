import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>WELCOME TO MY PAGE</h1>
      <p>Let's the journey begin!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          ABOUT ME
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
