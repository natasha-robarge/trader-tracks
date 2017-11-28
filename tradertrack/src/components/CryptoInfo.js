import React, { Component } from 'react';
import axios from 'axios';


class CryptoInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRequestData: '',
      isFetchingData: false
    }
    this.searchCrypto = this.searchCrypto.bind(this);
  }

  searchCrypto(e) {
    e.nativeEvent.stopImmediatePropagation();
    let cryptoInfoArr = [];
    let searchVal = document.querySelector('input').value;
    this.setState({
      isFetchingData: true
    });
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        let newData = response.data;
        newData.forEach((obj, idx) => {
          let slicedName = obj.name.slice(0, 3);
          if (slicedName === searchVal) {
            console.log(`found obj match, ${obj.symbol}`)
            cryptoInfoArr.push(obj);
          }
        });
        this.setState({
          getRequestData: cryptoInfoArr
        })
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  };

  render() {
    let cryptoInfo = this.state.getRequestData;
    let cryptoInfoArr = [];
    for (var i = 0; i < cryptoInfo.length; i++) {
      cryptoInfoArr.push(cryptoInfo[i]);
    }

    var dataList = cryptoInfoArr.map((data, idx) => {
      let date = Math.round(data.last_updated / (1000 * 60 * 60) % 24)
      return <div className={idx} key={idx}><div className="crypto-stats"><h3>{data.name} {data.symbol}</h3><br /><h3>Price in USD:</h3><p>{data.price_usd}</p><br /><h3>last updated:</h3><p>{date} hours ago</p><br /><p>Percent change by the hour is {data.percent_change_1h}%</p></div></div>;
    });

    return (
      <div className="crypto">
        <h1>Cryptocurrencies Info:</h1>
        <div className="search">
          <input className="searchbar" placeholder="Search for crypto name" onChange={(e) => this.searchCrypto(e)} />
          <button>Search</button>
        </div>
        {dataList}
      </div>
    );
  }
}

export default CryptoInfo;

