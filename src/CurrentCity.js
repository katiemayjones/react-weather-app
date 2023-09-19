import React, { useState } from "react";
import axios from "axios";
import Date from "./Date";
import Forecast from "./Forecast";
import "./CurrentCity.css";
import clearSkyIcon from "./images/clear-sky.png";
import rainDayIcon from "./images/rain-day.png";
import scatteredCloudsIcon from "./images/scattered-clouds.png";
import showerRainIcon from "./images/shower-rain.png";
import thunderstormIcon from "./images/thunderstorm.png";
import snowIcon from "./images/snow.png";
import mistyIcon from "./images/misty.png";

export default function CurrentCity() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState("");
  let [cityValue, setCityValue] = useState("");

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

  function SubmitForm(event) {
    event.preventDefault();
    let cityValue = document.querySelector("#city-value").value;

    setCity(cityValue);
    setCityValue(cityValue); //

    let apiKey = `e70e93a38oe24fbbd3ata4d913b05868`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(ShowResults);

    function ShowResults(response) {
      setTemp(Math.round(response.data.temperature.current));
      setDescription(weatherIcons[response.data.condition.icon]);
    }

    console.log(cityValue);
    Forecast({ cityValue });
  }

  console.log(description);
  return (
    <div className="current">
      <div className="City">
        <h1>{city.charAt(0).toUpperCase() + city.slice(1)} </h1>
        <Date />
        <h2>{temp} °C</h2>
        <img
          src={description}
          id="icon-current"
          width="100px"
          alt="Current Weather Icon"
        />
        <h3>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</h3>
        <div className="searchEngine">
          <form onSubmit={SubmitForm}>
            <input
              type="text"
              id="city-value"
              name="city"
              placeholder="Enter a city"
            />
            <button type="submit" className="search">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
