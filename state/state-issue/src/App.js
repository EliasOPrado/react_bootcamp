import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreKeeper from './ScoreKeeper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScoreKeeper />
      </div>
    );
  }
}

export default App;
