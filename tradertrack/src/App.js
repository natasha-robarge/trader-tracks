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
        let foundData = response.data
        console.log(foundData, ' found')
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
    let cryptoInfo = this.state.getRequestData;
    let cryptoInfoArr = [];
    for (var i = 0; i < cryptoInfo.length; i++) {
      cryptoInfoArr.push(cryptoInfo[i]);
    }

    var dataList = cryptoInfoArr.map((data, idx) => {
      return <div>Name: {data.name} Price in USD: {data.price_usd} last updated: {data.last_updated} </div>;
    });

    return (
      <div className="App">
        
        <CryptoInfo />
        {/* <ForexInfo />  */}
      </div>
    );
  }
}

export default App;
