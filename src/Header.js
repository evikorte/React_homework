import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  let HeaderData = {
    city: "Budapest",
    temperature: 13,
    description: "Partly cloudy",
    date: "October 28th, 2022 11:04",
    pressure: 1049,
    humidity: 84,
    wind: 2.57
  };

  return (
    <div className="Header">
      <div className="row upperrow">
        <div className="col-6 cityDetails">
          <div id="present-city">Currently in {HeaderData.city}</div>

          <div id="present-temperature">
            <div id="present-degree">{HeaderData.temperature}</div>
            <span id="metrics">
              <a href=" " id="celsius-sign" className="active">
                °C{" "}
              </a>{" "}
              /
              <a href=" " id="fahrenheit-sign">
                {" "}
                °F
              </a>
            </span>

            <div id="description">{HeaderData.description}</div>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="Present temperature icon"
              id="present-icon"
            />
          </div>
        </div>
        <div className="col-6 extraInfo">
          <div id="present-time">{HeaderData.date}</div>
          <div id="present-pressure">
            Pressure: <span id="pressure-value">{HeaderData.pressure}</span> hPA
          </div>
          <div id="present-humidity">
            Humidity: <span id="humidity-value">{HeaderData.humidity}</span>%
          </div>
          <div id="present-wind">
            Wind: <span id="wind-value">{HeaderData.wind}</span>km/h
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
