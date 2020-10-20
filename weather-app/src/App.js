import React from 'react';
import logo from './assets/logo_white_cropped.png';
import './App.css';
import SearchBar from './components/SearchBar';
import TemperatureToggle from './components/TemperatureToggle';
import WeatherList from './components/WeatherList';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    height: "100%"
  }
});

function App() {
  const classes = useStyles();
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
        <WeatherList></WeatherList>
      </div> 
    </div>
  );
}

export default App;