import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  renderFB() {
    if (this.props.count % 6 === 0) {
      return 'FizzBuzz';
    } else if (this.props.count % 3 === 0){
      return 'Buzz';
    } else if (this.props.count % 2 === 0){
      return 'Fizz';
    } else {
      return this.props.count;
    }
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <p>Current Count:{this.props.count}</p>
          
          
        </div>
        <h1> Fizz, Buzz, FizzBuzz, or n</h1>
        <span>Result: {this.renderFB()}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
