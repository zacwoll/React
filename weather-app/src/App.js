import React from 'react';
import logo from './assets/logo_white_cropped.png';
import './App.css';
import SearchBar from './components/SearchBar';
import TemperatureToggle from './components/TemperatureToggle';
import WeatherListItem from './components/WeatherListItem';

function NotFound(props) {
  // if weather data (exists) ? render weather component : render not found
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Icon-box">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="search-block">
          <div className="search-line">
            <SearchBar></SearchBar>
            <TemperatureToggle></TemperatureToggle>
          </div>
        </div>
      </header>
      <div>
        <WeatherListItem></WeatherListItem>
      </div> 
    </div>
  );
}

export default App;