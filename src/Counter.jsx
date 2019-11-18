import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps ", prevProps);
    console.log("prevState ", prevState);
    // if (prevProps.counter.value !== this.counter.value) {
    //   AJAX call to get new data from server
    // }
  }

  componentWillUnmount() {
    // We can do any king of cleanups like if we set up like timers or listners, to avoid memory leaks
    console.log("componentWillUnmount triggered");
  }

  render() {
    // console.log("Props ", this.props);
    console.log("Counter - Rendered");
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
