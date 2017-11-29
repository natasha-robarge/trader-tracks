import React, { Component } from 'react';
import axios from 'axios';

class ForexInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRequestData: '',
      isFetchingData: false,
      currConverted: ''
    }
    this.searchForex = this.searchForex.bind(this);
    this.convertCurr = this.convertCurr.bind(this);
  }

  searchForex(e, callback) {
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
            forexInfoArr.push(obj);
          }
        });

        this.setState({
          getRequestData: forexInfoArr
        });

        if(callback) {
          callback();
        }
      }).catch(error => {
        console.log(`Error at ${error}`);
      })
  }

  convertCurr() {
    //Input: search value to convert from
    let searchVal = document.querySelector('.searchbar').value;
    //Output: currency value to convert to
    let currencyVal = document.querySelector('.convertToCurr').value;
    
    axios.get('https://forex.1forge.com/1.0.2/convert?from='+ searchVal +'&to=' + currencyVal + '&quantity=1&api_key=9VnhYgLVa0eJ6ErrNciJAeSZDq360s0z')
      .then(res => {
        console.log(`retreived data, ${res.data}`);
        this.setState({
          currConverted: res.data.text
        })
      }).catch(err => {
        console.log(`Error, ${err}`);
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
    let symb = data.symbol.slice(0, 3) + " / " + data.symbol.slice(3, 6);
    return <div className={idx} key={idx}><div className="forex-stats"><h3>{symb}</h3><br /><br /><h3>Price: </h3><p>{data.price}</p><br /><br /><h3>Current Bid: </h3><p>{data.bid}</p><br /><br /><h3>last updated: </h3><p>{date} hours ago</p></div></div>;
  });
  return (
    <div className="forex">
    
      <h1>Forex Info</h1>

      <div className="forex-info">
      <div className="search">
        <input className="searchbar" placeholder="Search for FOREX pair" onChange={(e) => this.searchForex(e)} />
        <input className="convertToCurr" placeholder="Currency to convert" onChange={(e) => this.searchForex(e, this.convertCurr)} />
        <button onClick={(e) => this.searchForex(e, this.convertCurr)}>Search</button>
      </div>
        <h3>{this.state.currConverted}</h3>
          <br />
        {dataList}
      </div>
    </div>
  );
}
}

export default ForexInfo;