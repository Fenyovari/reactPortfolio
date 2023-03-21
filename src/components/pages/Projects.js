import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import "../Cards.css";

export default function Projects() {
  return (
    <>
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
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/projects"
            />
            <CardItem
              src="images/weather.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/math.jpg"
              text="Check it my login and registration form here"
              label="Login and registration"
              path="/calculator"
            />
            <CardItem
              src="images/amoba.jpg"
              text="Try out my Tic-Tac-Toe game with your friends!"
              label="Tic-Tac-Toe"
              path="/tictactoe"
            />
          </ul>
        </div>
      </div>
    </>
  );
}
