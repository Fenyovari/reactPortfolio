import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({ data }) {
  return (
    <div className="cw-container">
      <div className="cw-top">
        <div>
          <p className="cw-city">{data.city}</p>
          <p className="cw-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="cw-icon"
          src={`icons/${data.weather[0].icon}.png`}
        ></img>
      </div>
      <div className="cw-bottom">
        <p className="cw-temperature">{Math.round(data.main.temp)}°C</p>
        <div className="cw-details">
          <div className="cw-parameter-row">
            <span className="cw-paramater-label">Details</span>
          </div>
          <div className="cw-parameter-row">
            <span className="cw-paramater-label">Feels like</span>
            <span className="cw-paramater-value">
              {Math.round(data.main.feels_like)}
            </span>
          </div>
          <div className="cw-parameter-row">
            <span className="cw-paramater-label">Wind</span>
            <span className="cw-paramater-value">
              {Math.round(data.wind.speed)}
            </span>
          </div>
          <div className="cw-parameter-row">
            <span className="cw-paramater-label">Humidity</span>
            <span className="cw-paramater-value">
              {Math.round(data.main.humidity)}%
            </span>
          </div>
          <div className="cw-parameter-row">
            <span className="cw-paramater-label">Pressure</span>
            <span className="cw-paramater-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
