import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>
          Open source code by{" "}
          <a
            href="https://www.katiemaycodes.com"
            target="_blank"
            rel="noreferrer"
          >
            Katiemay
          </a>{" "}
          on{" "}
          <a
            href="https://github.com/katiemayjones/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </footer>
    </div>
  );
}
