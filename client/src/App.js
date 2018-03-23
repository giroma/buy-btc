import React, { Component } from 'react';
import Form from './Form.js';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      usdBalance: 156.12,
      btcBalance: 0.00000000,
      lastPrice: undefined,
      userInput: '',
      quote: ''
    }
  }

  componentDidMount() {
    this.callBitfinexApi()
      .then(res => this.setState({ lastPrice: Number(res.data) }))
      .catch(err => console.log(err));
  }

  callBitfinexApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleInputChange = (e) => {
    this.setState({userInput: Number(e.target.value)})
    this.calculateQuote(e.target.value)
  }

  calculateQuote = (amount) => {
    const lastPrice = this.state.lastPrice
    const quote = amount / lastPrice;
    if (amount > 0) {
      this.setState({quote: Number(quote.toFixed(8))})
    } else {
      this.setState({quote: '', userInput: ''})
    }
  }

  handleTrade = (e) => {
    e.preventDefault()
    const lastPrice = this.state.lastPrice
    const accountUSD = this.state.usdBalance
    const accountBTC = this.state.btcBalance
    const userInput = this.state.userInput
    const quote = userInput/lastPrice
    const newDollarBalance = accountUSD - userInput
    const newBitcoinBalance = accountBTC + quote
    this.setState({ usdBalance: Number(newDollarBalance.toFixed(2)),
                    btcBalance: Number(newBitcoinBalance.toFixed(8)),
                    quote: '',
                    userInput: ''})
  }

  render() {
    return (
      <Form usdBalance={this.state.usdBalance}
            btcBalance={this.state.btcBalance}
            quote={this.state.quote}
            userInput={this.state.userInput}
            handleInputChange={this.handleInputChange}
            handleTrade={this.handleTrade}/>
    );
  }
}

export default App;
