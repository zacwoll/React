import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
      window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Hi there!</div>;
  }
}

export default App;
