import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    console.log("Props ", this.props);
    return (
      <div>
        <h4>Count #{this.props.counter.id} </h4>
        <span className={this.getClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <hr />
      </div>
    );
  }

  getClass() {
    let { value: count } = this.props.counter;
    let classes = "btn m-2 btn-";
    return (classes += count === 0 ? "warning" : "primary");
  }

  formatCount() {
    let { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
