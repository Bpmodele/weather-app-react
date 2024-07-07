import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Madali Navas and is open-sourced on{" "}
          <a href="https://github.com/Bpmodele/weather-app-react">GitHub</a> and
          hosted on{" "}
          <a href="https://madi-weather-react-app.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
