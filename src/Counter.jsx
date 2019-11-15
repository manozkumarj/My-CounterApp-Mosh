import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span className={this.getClass()}>{this.formatCount()}</span>
        <button className="btn btn-secondary m-2">Increment</button>
      </div>
    );
  }
  getClass() {
    let { count } = this.state;
    let classes = "btn m-2 btn-";
    return (classes += count === 0 ? "warning" : "primary");
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
