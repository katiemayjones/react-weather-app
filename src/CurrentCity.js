import React, { useState } from "react";
import axios from "axios";
import "./CurrentCity.css";
import FormatDate from "./FormatDate";
import clearSkyIcon from "./images/clear-sky.png";
import rainDayIcon from "./images/rain-day.png";
import scatteredCloudsIcon from "./images/scattered-clouds.png";
import showerRainIcon from "./images/shower-rain.png";
import thunderstormIcon from "./images/thunderstorm.png";
import snowIcon from "./images/snow.png";
import mistyIcon from "./images/misty.png";

export default function CurrentCity() {
  let [weatherData, setWeatherData] = useState(false);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [date, setDate] = useState(new Date()); // Initialize with a valid date

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

  const SubmitForm = (event) => {
    event.preventDefault();
    setWeatherData(true);
    const cityValue = event.target.elements.city.value; // Use event.target to access the input value

    setCity(cityValue);

    const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f"; // Fixed API key (removed accidental "o")
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}`;
    console.log(apiUrl);
    console.log(apiUrl);

    axios.get(apiUrl).then(ShowResults);
  };

  const ShowResults = (response) => {
    const currentDate = new Date(response.data.time * 1000);
    setDate(currentDate);
    setTemp(Math.round(response.data.temperature.current));
    setDescription(response.data.condition.description);
    setIcon(weatherIcons[response.data.condition.icon]);
  };

  if (weatherData === false) {
    return (
      <div className="current">
        <div className="City">
          <h1>{city.charAt(0).toUpperCase() + city.slice(1)} </h1>
          <FormatDate currentDate={date} />
          <h2>{temp} °C</h2>

          <h3>{description.charAt(0).toUpperCase() + description.slice(1)}</h3>
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
  } else {
    return (
      <div className="current">
        <div className="City">
          <h1>{city.charAt(0).toUpperCase() + city.slice(1)} </h1>
          <FormatDate currentDate={date} />
          <h2>{temp} °C</h2>
          <img
            src={icon}
            id="icon-current"
            width="100px"
            alt="Current Weather Icon"
          />
          <h3>{description.charAt(0).toUpperCase() + description.slice(1)}</h3>
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
}
