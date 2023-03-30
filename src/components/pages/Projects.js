import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import "../Cards.css";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div 
    initial={{width: 0}} 
    animate={{width: "100%"}} 
    exit={{x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <h1 className="projects">PROJECTS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/math.jpg"
              text="Try out my simple calculator app"
              label="Calculator"
              path="/calculator"
            />
            <CardItem
              src="images/amoba.jpg"
              text="Try out my Tic-Tac-Toe game with your friends!"
              label="Tic-Tac-Toe"
              path="/tictactoe"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/todolist.jpg"
              text="If you have a lot of things to do, please try out my to-do list application"
              label="To-do list"
              path="/todo"
            />
            <CardItem
              src="images/weather.jpg"
              text="Check the weather before you go"
              label="Weather"
              path="/weather"
            />
            <CardItem
              src="images/planet.png"
              text="Imagine you have this landing page"
              label="Coming soon"
              path="/comingsoon"
            />
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
