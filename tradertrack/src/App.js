import React, { Component } from 'react';
import CryptoInfo from './components/CryptoInfo';
import ForexInfo from './components/ForexInfo';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRequestData: '',
      isFetchingData: false
    }
    this.getCryptoInfo = this.getCryptoInfo.bind(this);
  }

  getCryptoInfo() {
    this.setState({
      isFetchingData: true
    })
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        console.log(response, 'res');
        let foundData = response.data.map(obj => obj.data)
        this.setState({
          getRequestData: foundData
        })
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  };

  componentWillMount() {
    this.getCryptoInfo()
  }

  render() {
    return (
      <div className="App">
        
        {/* <CryptoInfo /> */}
        Data: {this.state.getRequestData}
        {/* <ForexInfo />  */}
      </div>
    );
  }
}

export default App;
