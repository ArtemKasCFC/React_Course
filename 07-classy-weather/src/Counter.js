import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }

  handleMinus() {
    this.setState(curState => {
      return {
        count: curState.count - 1,
      };
    });
  }
  handlePlus() {
    this.setState(curState => {
      return {
        count: curState.count + 1,
      };
    });
  }

  render() {
    const date = new Date(Date.now());
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleMinus}>-</button>
        <span>
          {date.toDateString()} {this.state.count}
        </span>
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}

export default Counter;
