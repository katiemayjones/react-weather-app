import React, { useState } from "react";
import axios from "axios";
import Date from "./Date";
import "./CurrentCity.css";

export default function CurrentCity() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState("");

  function SubmitForm(event) {
    event.preventDefault();
    let cityValue = document.querySelector("#city-value").value;

    setCity(cityValue);

    let apiKey = `e70e93a38oe24fbbd3ata4d913b05868`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(ShowResults);

    function ShowResults(response) {
      setTemp(Math.round(response.data.temperature.current));
      setDescription(response.data.condition.icon_url);
    }
  }

  return (
    <div className="current">
      <div className="City">
        <h1>{city.charAt(0).toUpperCase() + city.slice(1)} </h1>
        <Date /> 
        <h2>{temp} °C</h2>
        <img src={description} id="icon-current" width="70px" />
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
