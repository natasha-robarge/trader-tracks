# Trader Tracks

#### Your one stop shop to track the latest prices in FOREX and Cryptocurrencies

##### Check it out, [here](https://tradertracks.herokuapp.com/)

Trader Tracks is a React application that tells you prices of FOREX pairs as well as cryptocurrency prices since it's last update. It can convert the price to a currency of your choice. For cryptocurrencies, the price is automatically set to USD and the price of FOREX pairs are automatically set to the currency of the first pair. For example, EUR/USD would be automatically set to a price in euros unless specified otherwise. I hope to completely convert this into a React Native application for IOS over time.

# Getting Started

Navigate through the navbar by clicking either FOREX or Cryptocurrencies. Enter in the first three letters of a cryptocurrency of your choice or a FOREX pair of your choice. Cryptocurrencies and FOREX pairs that start with the three inputted letters will all be displayed, which gives you many related or similar options. To convert to a currency, simply input the abbreviation of the currency you would like to convert to. For example, for cryptocurrencies, if I wanted to know how much is 1 Bitcoin in the Brittish Pound, I would type into the conversion search bar, GBP. The pricing will show under the original price that displays USD pricing.

# Built With

* React
* React Router DOM
* JavaScript
* Axios
* [Forge API](https://1forge.com/forex-data-api/api-documentation)
* [Coin Market Cap API](https://coinmarketcap.com/api/)
* CSS
  * ... and more functionality to come!

# Future Features To Be Included

* Add country flag of both pairings 
* Add Stock market prices functionality
* Login via Coinbase/Tradingview or Sign Up
* Login via email and password
* Add notes saved to your profile
* Community discussion board
* minute/hourly/daily/monthly charts of cryptocurrency, FOREX, and stock market
