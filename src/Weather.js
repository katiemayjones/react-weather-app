import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [temp, setTemp] = useState(null);
  let [city, setCity] = useState("");
  let [conditions, setConditions] = useState("");

  let apiKey = `e70e93a38oe24fbbd3ata4d913b05868`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition);
  }, []);

  function getPosition(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let locationApiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(locationApiUrl).then(showResult);
  }

  function showResult(response) {
    setTemp(Math.round(response.data.temperature.current));
    setCity(response.data.city);
    setConditions(`${response.data.condition.icon_url}`);
  }

  return (
    <div className="current">
      <h1>{`${city}`}</h1>
      <h3>Monday 18th September 2023</h3>
      <h2>{`${temp}°c`}</h2>
      <img src={`${conditions}`} alt="current-conditions" />
    </div>
  );
}
