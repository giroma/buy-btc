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
      last_price: '',
      input: 0
    }
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ last_price: parseFloat(res.data) }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <Form usd={this.state.usd}
          btc={this.state.btc}
          last_price={this.state.last_price}
          input={this.state.input}/>
    );
  }
}

export default App;
