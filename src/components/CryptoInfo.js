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
    this.convertCurr = this.convertCurr.bind(this);
    this.displayCrypto = this.displayCrypto.bind(this);
  }

  displayCrypto(callback) {
    let cryptoInfoArr = [];

    this.setState({
      isFetchingData: true
    });
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        let newData = response.data;
        newData.forEach((obj, idx) => {
            cryptoInfoArr.push(obj);
        });
        this.setState({
          getRequestData: cryptoInfoArr
        })
        if(callback) {
          callback();
        }
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  };

  searchCrypto(e, callback) {
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
          let slicedName = obj.id.slice(0, 3);
          if (slicedName === searchVal) {
            // console.log(`found obj match, ${obj.symbol}`)
            cryptoInfoArr.push(obj);
          }
        });
        this.setState({
          getRequestData: cryptoInfoArr
        })
        if(callback) {
          callback();
        }
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  };

  componentWillMount() {
    this.displayCrypto(this.convertCurr);
  }

  convertCurr() {
    //get search value
    let searchVal = document.querySelector('.searchbar').value;
    //get currency to convert to value
    let currencyVal = document.querySelector('.convertToCurr').value.toLowerCase();
    //send request
    axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=' + currencyVal)
      .then(res => {
        let run = res.data.forEach((obj, idx) => {
          let notGiven = obj[`price_${currencyVal}`];
          let displayPrice = document.getElementById(idx);
          // console.log(displayPrice, obj);
          displayPrice.innerHTML = notGiven || 'not given';
        })
      }).catch(err => {
        console.log(`Received error, ${err}`);
      })
  }

  render() {
    let cryptoInfo = this.state.getRequestData;
    let cryptoInfoArr = [];
    for (var i = 0; i < cryptoInfo.length; i++) {
      cryptoInfoArr.push(cryptoInfo[i]);
    }

    var dataList = cryptoInfoArr.map((data, idx) => {
      let currencyVal = document.querySelector('.convertToCurr').value.toUpperCase();

      let currentDate = new Date(data.last_updated * 1000);
      let dateNow = Date.now();
      let epochDate = currentDate - dateNow;
      let date = Math.floor(Math.abs((epochDate) / 1000));
      return <div className="crypto-display" key={idx}><div className="crypto-stats"><h3>{data.name} / {data.symbol}</h3><br /><h3>Price in USD:</h3><p>{data.price_usd}</p><br /><h3>Price in {currencyVal || 'currency'}: </h3>  <h3 id={idx}> not given </h3><br /><h3>last updated:</h3><p>{date} seconds ago</p><br /><span>Percent change by the hour is {data.percent_change_1h}%</span></div></div>;
    });

    return (
      <div className="crypto">

        <h1>Cryptocurrencies Info:</h1>
        
        <div className="search">
          <input className="searchbar" placeholder="Filter crypto names" onChange={(e) => this.searchCrypto(e)} />
          <input className="convertToCurr" placeholder="Currency to convert" onChange={(e) => this.searchCrypto(e, this.convertCurr)} />
          <button onClick={(e) => this.searchCrypto(e, this.convertCurr)}>Filter</button>
        </div>
        {dataList}
      </div>
    );
  }
}

export default CryptoInfo;

