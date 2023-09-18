import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <Weather />
      <Forecast />
      <SearchEngine />
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
