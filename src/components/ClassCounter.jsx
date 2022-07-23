import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    } 
    // this.handleIncreaseCount = this.handleIncreaseCount.bind(this)
    // this.handleDecreaseCount = this.handleDecreaseCount.bind(this)
  }
  handleIncreaseCount = (e) => {
    e.preventDefault();
    this.setState({count: this.state.count+1})
  }
  handleDecreaseCount = (e) => {
    e.preventDefault();
    this.setState({count: this.state.count-1})
  }
  render() {
    return (
      <div>
        <h1 id="counter2">Counter:{this.state.count}</h1>
        <hr/>
        <button id="bt3" onClick={this.handleIncreaseCount}>Increase</button>
        <button id="bt4" onClick={this.handleDecreaseCount}>Decrease</button>
      </div>
    );
  }
}

export default ClassCounter;
