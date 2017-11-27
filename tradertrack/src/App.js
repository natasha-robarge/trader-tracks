import React, { Component } from 'react';
import CryptoInfo from './components/CryptoInfo';
import ForexInfo from './components/ForexInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CryptoInfo />
        <ForexInfo />
      </div>
    );
  }
}

export default App;
