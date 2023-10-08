import React from "react";

export default function FormatDate(props) {
  console.log(props, "sas");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.currentDate.getDay()];

  let dateN = props.currentDate.getDate();
  let month = props.currentDate.toLocaleString("en-GB", { month: "long" });
  let year = props.currentDate.getFullYear();

  let newDateFormat = `${day} ${dateN} ${month} ${year}`;

  return <h3>{newDateFormat}</h3>;
}
