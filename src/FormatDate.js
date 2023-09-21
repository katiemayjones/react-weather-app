import React from "react";

export default function FormatDate({ currentDate }) {
  console.log(currentDate);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[currentDate.getDay()];

  console.log(day);
  let dateN = currentDate.getDate();
  let month = currentDate.toLocaleString("en-GB", { month: "long" });
  let year = currentDate.getFullYear();

  let newDateFormat = `${day}${dateN}${month} ${year}`;

  return <h3>{newDateFormat}</h3>;
}
