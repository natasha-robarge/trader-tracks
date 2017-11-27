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
        this.setState({
          name: response
        }) 
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  };

  render() {
    
    return ( 
      <div className = "crypto">
        Here is Crypto data: {this.state.name}
      </div>
    );
  }
}

export default CryptoInfo;
