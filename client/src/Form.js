import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <div className='account'>
          <div>Account Balance</div>
          <div className="holdings">
            <div>USD<span>{this.props.usd.toFixed(2)}</span></div>
            <div>BTC <span>{this.props.btc.toFixed(8)}</span></div>
          </div>
        </div>
        <span>Trade</span>
        <input type="text" disabled="true" placeholder="USD" />
        <input type="text" placeholder="Enter your amount" value={this.props.input} onChange={this.props.changeInput}/>
        <span>For</span>
        <input type="text" disabled="true" placeholder="BTC"  />
        <input type="text" disabled="true" placeholder="Display Quote"/>
        <button className="button">Trade</button>
      </div>
    )
  }
}

export default Form;
