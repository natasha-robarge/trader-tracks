import React, { Component } from 'react';

class Welcome extends Component {

  render() {
    return (
      <div className="Welcome">
        <header>
          <div className="heading-container">
            <h1>WELCOME TO TRADER TRACKS</h1>
            <hr className="dashed-line" />
            <hr className="dotted-line" />
            <hr className="dashed-line" />
          </div>

          <h4>Too lazy to hit up the charts? Come look at some daily statistics!</h4>
          
          <br />
          <br />
          <p> We are traders, developers, and people who ended up investing in forex or cryptocurrency.
              We are the analytics who search for a quicker way to get our daily information to bet on the latest short.
              We read candle sticks and bar graphs. We read the news daily to know what will fall or rise.
              <br /> <br /> <br />
              We decided to find a way to get info fast, and this is our answer.
          </p>
        </header>
      </div>
    );
  }
}

export default Welcome;