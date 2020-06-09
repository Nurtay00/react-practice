import React, { Component } from 'react';
import Counter2 from '../counter2/counter2';

export default class counter extends Component {
  state = {
    count: 0,
  };
  addCount = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h2 key={1}>counter={this.state.count}</h2>
        <Counter2 />
        <hr />
        <button key={2} onClick={this.addCount}>
          +
        </button>
        <button
          key={3}
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          -
        </button>
      </div>
    );
  }
}
