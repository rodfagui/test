import { Component } from "react";
import PropTypes from 'prop-types';

export class Counter extends Component {
  constructor(props) {
    console.log('Corre constructor');
    super(props);
    if (this.props.defaultCount && !(typeof this.props.defaultCount === 'number')) {
      throw new Error ('Default count is not a number');
    }
    this.state = {
      count: this.props.defaultCount,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidMount() {
    console.log('Corre did mount');
  }

  componentDidUpdate() {
    console.log('Corre did update');
  }

  handleIncrement = function () {
    this.setState((prevState) => ({
      ...this.state,
      count: prevState.count + 1
    }));
  }

  handleDecrement = function () {
    this.setState((prevState) => ({
      ...this.state,
      count: prevState.count - 1
    }));
  } 

  render() {
    console.log('Corre render');
    return (
      <div>
        <h1>Cuenta</h1>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>Incrementar</button>
        <button onClick={this.handleDecrement}>Decrementar</button>
      </div>
    );
  }
}

Counter.propTypes = {
  defaultCount: PropTypes.number,
}