import React, { Component } from 'react';
import axios from 'axios';

class CryptoInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRequestData: '',
      isFetchingData: false
    }
    
  }

  getCryptoInfo() {
    this.setState({
      isFetchingData: true
    })
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        console.log(response, 'res');
        const foundData = response.data.data.children.map(obj => obj.data);
        this.setState({
          getRequestData: foundData
        }) 
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  };

  render() {
    
    return ( 
      <div className = "crypto">
        Here is Crypto data: <li key={this.state.getRequestData.id}>{this.state.getRequestData.name}</li>
      </div>
    );
  }
}

export default CryptoInfo;
