import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRequestData: '',
      isFetchingData: false
    }
  }

  this.getCryptoInfo = this.getCryptoInfo.bind(this);

  function getCryptoInfo(data) {
    this.setState({
      isFetchingData: true
    })
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        console.log(response);
        let foundData = response[0].name;
        this.setState({
          getRequestData: foundData
        })
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  };

  render() {
    return (
      <View>
        <Text>
          {this.state.getRequestData}
        </Text>
        <Text>
          
        </Text>
        <Text>
          
        </Text>
      </View>
    );
  }
}