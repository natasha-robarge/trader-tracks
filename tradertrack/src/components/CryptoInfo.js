import React, {
  Component
} from 'react';
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

  getCryptoInfo(data) {
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
    return ( <
      div className = "crypto" > {
        this.state.getRequestData
      } <
      /div>
    );
  }
}

export default CryptoInfo;
