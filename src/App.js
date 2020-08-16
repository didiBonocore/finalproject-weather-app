import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
       Created by Eugenia Bonocore and{" "}
          <a href="https://github.com/didiBonocore/finalproject-weather-app" target="_blank">
      open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}