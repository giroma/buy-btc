import React, { Component } from 'react';
import Form from './Form.js';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      usd: 156.12,
      btc: 0.00000000,
      lastPrice: undefined,
      input: '',
      quote: ''
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ lastPrice: parseFloat(res.data) }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleInputChange = (e) => {
    this.setState({input: parseFloat(e.target.value)})
    this.calculateQuote(e.target.value)
  }

  calculateQuote = (amount) => {
    console.log('amount', amount);
    let lastPrice = this.state.lastPrice
    console.log('lastPrice', lastPrice);
    let quote = amount / lastPrice;
    console.log('quote', quote);
    this.setState({quote: quote.toFixed(8)})
    if (amount === '') {this.setState({quote: ''})} //in nothing in input, return state to ''
  }

  handleTrade = () => {

  }

  render() {
    return (
      <Form usd={this.state.usd}
            btc={this.state.btc}
            quote={this.state.quote}
            handleInputChange={this.handleInputChange}
            handleTrade={this.handleTrade}/>
    );
  }
}

export default App;
