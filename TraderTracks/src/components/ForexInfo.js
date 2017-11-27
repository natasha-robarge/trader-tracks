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

  function getForexInfo(data) {
    this.setState({
      isFetchingData: true
    })
    axios.get('https://forex.1forge.com/1.0.2/quotes?api_key=9VnhYgLVa0eJ6ErrNciJAeSZDq360s0z')
      .then(response => {
        console.log(response);
        let foundData = response[0].name;
        this.setState({
          getRequestData: foundData
        })
      }).catch(error => {
        console.log(`Error at ${error}`);
    })
  }

  render() {
    return (
      <View>
        <Text>

        </Text>
        <Text>

        </Text>
        <Text>

        </Text>
      </View>
    );
  }
}