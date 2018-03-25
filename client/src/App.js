import React, { Component } from 'react';
import Form from './Form.js';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'
import {updateUsdBalance, updateBtcBalance} from './actions/balance-actions'
import {updateQuote, updateLastPrice, updateUserInput} from './actions/form-actions'

class App extends Component {


  componentDidMount() {
    this.callBitfinexApi()
      .then(res => this.onUpdateLastPrice(Number(res.data)))
      .catch(err => console.log(err));
  }

  callBitfinexApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleInputChange = (e) => {
    this.onUpdateUserInput(Number(e.target.value))
    this.calculateQuote(e.target.value)
  }

  calculateQuote = (amount) => {
    const lastPrice = this.props.lastPrice
    const quote = amount / lastPrice;
    if (amount > 0) {
      this.onUpdateQuote( Number(quote.toFixed(8)))
    } else {
      this.onUpdateQuote('') //reset fields when input empty
      this.onUpdateUserInput('')
    }
  }

  handleTrade = (e) => {
    e.preventDefault()
    const lastPrice = this.props.lastPrice
    const accountUSD = this.props.usdBalance
    const accountBTC = this.props.btcBalance
    const userInput = this.props.userInput
    const quote = userInput/lastPrice
    const newDollarBalance = accountUSD - userInput
    const newBitcoinBalance = accountBTC + quote
    //if there is input on submit, update balances, and reset form fields
    if (userInput) {
      this.onUpdateUsdBalance(Number(newDollarBalance.toFixed(2)))
      this.onUpdateBtcBalance(Number(newBitcoinBalance.toFixed(8)))
      this.onUpdateQuote('')
      this.onUpdateUserInput('')
    }
  }
//functions that change the states, with the actions coming from props
  onUpdateQuote(quote) {
    this.props.onUpdateQuote(quote)
  }
  onUpdateLastPrice(lastPrice) {
    this.props.onUpdateLastPrice(lastPrice)
  }
  onUpdateUserInput(userInput) {
    this.props.onUpdateUserInput(userInput)
  }
  onUpdateBtcBalance(btcBalance) {
    this.props.onUpdateBtcBalance(btcBalance)
  }
  onUpdateUsdBalance(usdBalance) {
    this.props.onUpdateUsdBalance(usdBalance)
  }

  render() {
    return (
      <Form usdBalance={this.props.usdBalance}
            btcBalance={this.props.btcBalance}
            quote={this.props.quote}
            userInput={this.props.userInput}
            handleInputChange={this.handleInputChange}
            handleTrade={this.handleTrade}/>
    );
  }
}
const mapStateToProps = state => ({
  usdBalance: state.usdBalance,
  btcBalance: state.btcBalance,
  lastPrice: state.lastPrice,
  userInput: state.userInput,
  quote: state.quote
})
const mapActionsToProps = {
  onUpdateUsdBalance: updateUsdBalance,
  onUpdateUserInput: updateUserInput,
  onUpdateLastPrice: updateLastPrice,
  onUpdateBtcBalance: updateBtcBalance,
  onUpdateQuote: updateQuote
}

//CONNECT, connects the above sattes and actions to the app props
export default connect(mapStateToProps, mapActionsToProps)(App);
