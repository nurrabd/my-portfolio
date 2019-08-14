import React from 'react';
import logo from './logo.svg';
import nur from './nur.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h4> Welcome to my Page</h4>
          <img
          src={nur}
          alt="hej"
          width="20.3333%"
          height="20.3333%"/>

          <h1> Under construction</h1>
          <img
          src={logo}
          alt="hej"
          width="33.3333%"
          height="33.3333%"
          />

      </header>
    </div>
  );
}

export default App;
