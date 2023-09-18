import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="threeDayForecast">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Tues</h4>
            <img src="" alt="forecast1"></img>
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
