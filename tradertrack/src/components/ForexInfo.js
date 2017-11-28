import React, { Component } from 'react';
import axios from 'axios';

class ForexInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRequestData: '',
      isFetchingData: false
    }
    this.searchForex = this.searchForex.bind(this);
  }

  // getForexInfo() {
  //   this.setState({
  //     isFetchingData: true
  //   })
  //   axios.get('https://forex.1forge.com/1.0.2/quotes?api_key=9VnhYgLVa0eJ6ErrNciJAeSZDq360s0z')
  //     .then(response => {
  //       console.log(response);
  //       let foundData = response.data;
  //       this.setState({
  //         getRequestData: foundData
  //       })
  //     }).catch(error => {
  //       console.log(`Error at ${error}`);
  //     })
  // }


  searchForex(e) {
    e.nativeEvent.stopImmediatePropagation();
    let forexInfoArr = [];
    let searchVal = document.querySelector('input').value;
    this.setState({
      isFetchingData: true
    });
    axios.get('https://forex.1forge.com/1.0.2/quotes?api_key=9VnhYgLVa0eJ6ErrNciJAeSZDq360s0z')
      .then(response => {
        let newData = response.data;
        newData.forEach((obj, idx) => {
          let slicedSymb = obj.symbol.slice(0, 3);
          if (slicedSymb === searchVal) {
            console.log(`found obj match, ${obj.symbol}`)
            forexInfoArr.push(obj);
          }
        });
        this.setState({
          getRequestData: forexInfoArr
        })
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  }

render() {
  let forexInfo = this.state.getRequestData;
  let forexInfoArray = [];
  for (var i = 0; i < forexInfo.length; i++) {
    forexInfoArray.push(forexInfo[i]);
  }

  var dataList = forexInfoArray.map((data, idx) => {
    let date = Math.round(data.timestamp / (1000 * 60 * 60) % 24)
    return <div className={idx} key={idx}><div className="forex-stats"><h3>{data.symbol}</h3><br /><h3>Price: </h3><p>{data.price}</p><br /><h3>Current Bid: </h3><p>{data.bid}</p><br /><h3>last updated: </h3><p>{date} hours ago</p></div></div>;
  });
  return (
    <div className="forex">
      <h1>Forex Info</h1>

      <div className="forex-info">
      <div className="search">
        <input className="searchbar" placeholder="Search for FOREX pair" onChange={(e) => this.searchForex(e)} />
        <button onClick={(e) => this.searchForex(e)}>Search</button>
      </div>
        {dataList}
      </div>
    </div>
  );
}
}

export default ForexInfo;