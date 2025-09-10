import React, { Component } from "react";
import "./ClickCounter.css";

interface State {
  count: number;
}

class ClickCounter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h2>Số lần click: {this.state.count}</h2>
        <button className="btn" onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default ClickCounter;
