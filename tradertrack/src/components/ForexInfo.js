import React, { Component } from 'react';
import axios from 'axios';

class ForexInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRequestData: '',
      isFetchingData: false
    }
    this.getForexInfo = this.getForexInfo.bind(this);
  }

  getForexInfo(data) {
    this.setState({
      isFetchingData: true
    })
    axios.get('https://forex.1forge.com/1.0.2/quotes?api_key=9VnhYgLVa0eJ6ErrNciJAeSZDq360s0z')
      .then(response => {
        console.log(response);
        let foundData = response.data;
        this.setState({
          getRequestData: foundData
        })
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  }

  componentWillMount() {
    this.getForexInfo()
  }

render() {
  let forexInfo = this.state.getRequestData;
  let forexInfoArr = [];
  for (var i = 0; i < forexInfo.length; i++) {
    forexInfoArr.push(forexInfo[i]);
  }

  var dataList = forexInfoArr.map((data, idx) => {
    let date = Math.round(data.timestamp / (1000 * 60 * 60) % 24)
    return <div className={idx}><div className="forex-stats"><h3>{data.symbol}</h3><br /><h3>Price: </h3><p>{data.price}</p><br /><h3>Current Bid: </h3><p>{data.bid}</p><br /><h3>last updated: </h3><p>{date} hours ago</p></div></div>;
  });
  return (
    <div className="forex">
    <h1>Forex Info</h1>
    <div className="forex-info">
      <div className="search">
        <input placeholder="Search for FOREX pair" />
        <button onClick={this.getName()}>Submit</button>
      </div>

      {dataList}
    </div>
    </div>
  );
}
}

export default ForexInfo;