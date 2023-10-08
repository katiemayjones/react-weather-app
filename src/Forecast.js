import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import clearSkyIcon from "./images/clear-sky.png";
import rainDayIcon from "./images/rain-day.png";
import scatteredCloudsIcon from "./images/scattered-clouds.png";
import showerRainIcon from "./images/shower-rain.png";
import thunderstormIcon from "./images/thunderstorm.png";
import snowIcon from "./images/snow.png";
import mistyIcon from "./images/misty.png";

export default function Forecast(props) {
  let weatherIcons = {
    "clear-sky-day": clearSkyIcon,
    "clear-sky-night": clearSkyIcon,
    "few-clouds-day": scatteredCloudsIcon,
    "few-clouds-night": scatteredCloudsIcon,
    "scattered-clouds-day": scatteredCloudsIcon,
    "scattered-clouds-night": scatteredCloudsIcon,
    "broken-clouds-day": scatteredCloudsIcon,
    "broken-clouds-night": scatteredCloudsIcon,
    "shower-rain-day": showerRainIcon,
    "shower-rain-night": showerRainIcon,
    "rain-day": rainDayIcon,
    "rain-night": rainDayIcon,
    "thunderstorm-day": thunderstormIcon,
    "thunderstorm-night": thunderstormIcon,
    "snow-day": snowIcon,
    "snow-night": snowIcon,
    "mist-day": mistyIcon,
    "mist-night": mistyIcon,
  };
  let [dayOneIcon, setDayOneIcon] = useState("");
  let [dayOneTemp, setDayOneTemp] = useState(null);

  let [dayTwoIcon, setDayTwoIcon] = useState("");
  let [dayTwoTemp, setDayTwoTemp] = useState(null);

  let [dayThreeIcon, setDayThreeIcon] = useState("");
  let [dayThreeTemp, setDayThreeTemp] = useState(null);

  const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let long = props.coordinates.longitude;
  let lat = props.coordinates.latitude;

  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${long}&lat=${lat}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);

  function displayForecast(response) {
    setDayOneTemp(Math.round(response.data.daily[0].temperature.day));
    setDayOneIcon(weatherIcons[response.data.daily[0].condition.icon]);

    setDayTwoTemp(Math.round(response.data.daily[1].temperature.day));
    setDayTwoIcon(weatherIcons[response.data.daily[1].condition.icon]);

    setDayThreeTemp(Math.round(response.data.daily[2].temperature.day));
    setDayThreeIcon(weatherIcons[response.data.daily[2].condition.icon]);
  }
  return (
    <div className="threeDayForecast">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src={dayOneIcon}
              id="icon-day-one"
              width="50px"
              alt="Day One Weather Icon"
            />{" "}
            <h4>{dayOneTemp}°C</h4>
          </div>
          <div className="col">
            <img
              src={dayTwoIcon}
              id="icon-day-one"
              width="50px"
              alt="Day One Weather Icon"
            ></img>{" "}
            <h4>{dayTwoTemp}°C</h4>
          </div>
          <div className="col">
            <img
              src={dayThreeIcon}
              id="icon-day-one"
              width="50px"
              alt="Day One Weather Icon"
            ></img>{" "}
            <h4>{dayThreeTemp}°C</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
