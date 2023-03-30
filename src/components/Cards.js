import React, { useEffect } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Aos from "aos";
import 'aos/dist/aos.css';

function Cards() {

    useEffect(() =>{
      Aos.init({duration: 1500})
    },[])

  return (
    <div className="cards">
      <h1 data-aos="zoom-in">Check out my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items" data-aos="zoom-in">
            <CardItem
              src="images/math.jpg"
              text="Try out my simple calculator app"
              label="Calculator"
              path="/calculator"

            />
            <CardItem
              src="images/amoba.jpg"
              text="Play Tic-Tac-Toe game with your friends!"
              label="Tic-Tac-Toe"
              path="/tictactoe"
            />
          </ul>
          <ul className="cards__items" data-aos="zoom-in">
            <CardItem
              src="images/todolist.jpg"
              text="Let's write some of your to-dos here"
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
              label="Landing page"
              path="/comingsoon"
            />
          </ul>
        </div>
      </div>
      <h1 data-aos="zoom-in">
        Let's check out my other projects!{" "}
        <a href="/projects">
          <i className="fa fa-arrow-right"></i>
        </a>
      </h1>
    </div>
  );
}

export default Cards;
