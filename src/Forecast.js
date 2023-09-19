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
  let cityValue = props.cityValue;
  if (!cityValue) {
    return <div>Three day forecast</div>;
  } else {
    ReturnForecast(cityValue);

    function ReturnForecast(response) {
      let apiKey = `e70e93a38oe24fbbd3ata4d913b05868`;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityValue}&key=${apiKey}`;

      axios.get(apiUrl).then(ReturnForecast);
      let [dayOne, setDayOne] = useState("");
      let [dayOneTemp, setDayOneTemp] = useState(null);


      // need to move the function actions so that there is a seperate function for the api call and then the response from the api.
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
      // let dayTwo = response.data.daily[1].condition.icon;
      // let dayThree = response.data.daily[2].condition.icon;

      // let dayTwoTemp = response.data.daily[1].temperature.day;
      // let dayThreeTemp = response.data.daily[2].temperature.day;

      console.log(response);
      console.log(response.data.daily);
      console.log(response.data.daily[0]);

      setDayOne(weatherIcons[response.data.daily[0].condition.icon]);
      setDayOneTemp(response.data.daily[0].temperature.day);

      console.log(dayOne);
      return (
        <div className="threeDayForecast">
          <div className="container">
            <div className="row">
              <div className="col">
                <h4>Day</h4>
                <img
                  src="./images/misty.png"
                  id="icon-day-one"
                  width="70px"
                  alt="Day One Weather Icon"
                />{" "}
                <h4>{dayOneTemp}</h4>
              </div>
              <div className="col">
                <h4>Wed</h4>
                <img src="" alt="forecast2"></img>
              </div>
              <div className="col">
                <h4>Thurs</h4>
                <img src="" alt="forecast3"></img>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
