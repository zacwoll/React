import React from 'react';
import logo from './assets/logo_white_cropped.png';
import './App.css';
import SearchBar from './components/SearchBar';
import TemperatureToggle from './components/TemperatureToggle';

function App() {
  return (
    <div className="App">
      <div style={{padding: "10px"}}>
        <header className="App-header">
          <div className="Icon-box">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="search-block">
            <div className="search-line">
              <SearchBar></SearchBar>
              <TemperatureToggle></TemperatureToggle>
            </div>
            <div className="not-found">
              <p>City not Found</p>
            </div>
          </div>
        </header>
      </div>
      <hr />
    </div>
  );
}

export default App;