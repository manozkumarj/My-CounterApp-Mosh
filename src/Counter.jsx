import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
  };

  rederTags() {
    if (this.state.tags.length === 0) return <p>There are no tags available</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.handleIncrement(1)}
        >
          Increment
        </button>
        {this.state.tags.length === 0 && <h5>Please create new tags</h5>}
        {this.rederTags()}
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
