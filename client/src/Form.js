import React, { Component } from 'react';

class Form extends Component {
  saveAmount = () => {

  }
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
        <input className='input-field' type="number" max={this.props.usd} placeholder="Enter your amount" onChange={this.props.handleInputChange}/>
        <span>For</span>
        <input type="text" disabled="true" placeholder="BTC"  />
        <input type="text" disabled="true" placeholder="Display Quote" value={this.props.quote}/>
        <button className="button" onClick={this.props.handleTrade}>Trade</button>
      </div>
    )
  }
}

export default Form;
