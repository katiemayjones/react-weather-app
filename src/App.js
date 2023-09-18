import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <Weather />
      <Forecast />
      <footer>
        <p>
          <a
            href="https://github.com/katiemayjones/react-weather-app"
            target="_blank"
          >
            Open source code by Katiemay
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
