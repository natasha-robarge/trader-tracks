import React, { Component } from 'react';
import axios from 'axios';


class CryptoInfo extends Component {
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
      let date = Math.round(data.last_updated / (1000 * 60 * 60) % 24)
      return <div className={idx}><div className="crypto-stats"><h3>{data.name} {data.symbol}</h3><br /><h3>Price in USD:</h3><p>{data.price_usd}</p><br /><h3>last updated:</h3><p>{date} hours ago</p><br /><p>Percent change by the hour is {data.percent_change_1h}%</p></div></div>;
    });

    return (
      <div className="App">
        <h1>Cryptocurrencies Info:</h1>
        <div className="search">
          <input placeholder="Search for crypto name" />
          <button>Submit</button>
        </div>
        {dataList}
      </div>
    );
  }
}

export default CryptoInfo;

