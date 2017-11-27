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
      return <div className={idx}>Name: {data.name} <br /> Price in USD: {data.price_usd} <br /> last updated: {data.last_updated} </div>;
    });

    return (
      <div className="App">
        <h1>Cryptocurrencies Info:</h1>
        {dataList}
      </div>
    );
  }
}

export default CryptoInfo;

