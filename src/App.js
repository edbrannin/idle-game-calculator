import React, { Component } from 'react';
import './App.css';
import AmountInput from './AmountInput';
import TimespanInput from './TimespanInput';
import Result from './Result';

class App extends Component {
  state = {
    current: 0,
    target: 0,
    rate: 0,
    timespan: 1,
  }

  updateCurrent = (current) => {
    this.setState({ current });
  }

  updateTarget = (target) => {
    this.setState({ target });
  }

  updateRate = (rate) => {
    this.setState({ rate });
  }

  updateTimespan = (timespan) => {
    this.setState({ timespan });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p>Target Amount</p>
          <AmountInput onChange={this.updateTarget}/>
        </div>
        <div>
          <p>Current Amount</p>
          <AmountInput onChange={this.updateCurrent}/>
        </div>
        <div>
          <p>Rate</p>
          <AmountInput onChange={this.updateRate} /> per <TimespanInput onChange={this.updateTimespan} />
        </div>
        <div>
          <h2>Answer</h2>
          <Result {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
