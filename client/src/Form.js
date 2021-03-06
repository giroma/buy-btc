import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.handleTrade}>
        <div className='account'>
          <div>Account Balance</div>
          <div className="holdings">
            <div>USD<span>{this.props.usdBalance}</span></div>
            <div>BTC <span>{this.props.btcBalance}</span></div>
          </div>
        </div>
        <span>Trade</span>
        <input className='header' type="text" disabled="true" placeholder="USD" />
        {/* min and max validation on form submit */}
        <input className='input-field' type="number" value = {this.props.userInput} minLength='1' step='any' min='1.0' max={this.props.usdBalance} placeholder="Enter your amount" onChange={this.props.handleInputChange}/>
        <span>For</span>
        <input className='header' type="text" disabled="true" placeholder="BTC"  />
        <input className='quote' type="text" disabled="true" placeholder="Display Quote" value={this.props.quote}/>
        <button>Trade</button>
      </form>
    )
  }
}

export default Form;
