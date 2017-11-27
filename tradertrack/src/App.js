import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import CryptoInfo from './components/CryptoInfo';
import ForexInfo from './components/ForexInfo';
import Welcome from './components/Welcome';
import axios from 'axios';
import './App.css';

class App extends Component {git

  render() {

    return (
      <div className="App">
      <Router>
        <div className="container">
          <nav>
            <Link to="/">HOME</Link>
            <Link to="/crypto">CRYPTOCURRENCIES PRICES</Link>
            <Link to="/forex">FOREX PRICES</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/crypto" component={CryptoInfo} />
            <Route path="/forex" component={ForexInfo} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
