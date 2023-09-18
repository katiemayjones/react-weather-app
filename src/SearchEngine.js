import React, { useState } from "react";
import "./SearchEngine.css";
import Weather from "./Weather";

export default function SearchEngine() {

  let [city, setCity] = useState("");

  function submitForm(event) {
    event.preventDefault();
    let cityValue = document.querySelector("#city-value").value;

    setCity(cityValue);
    Weather(city);
  }
  return (
    <div className="searchEngine">
      <form onSubmit={submitForm}>
        <input
          type="text"
          id="city-value"
          name="city"
          placeholder="Type city"
        ></input>
        <br />
        <button>Search</button>
      </form>
    </div>
  );
}
