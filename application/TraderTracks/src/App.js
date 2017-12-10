import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

class App extends Component {
  render() {
    const config = {
      apiKey: "AIzaSyA0YF5fxf8YXM1LCjw2PPiZhwxWwFU-03o",
      authDomain: "tradertracks-5f6af.firebaseapp.com",
      databaseURL: "https://tradertracks-5f6af.firebaseio.com",
      projectId: "tradertracks-5f6af",
      storageBucket: "tradertracks-5f6af.appspot.com",
      messagingSenderId: "234575797753"
    };
    firebase.initializeApp(config);
    
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default App;