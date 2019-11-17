import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.count.value,
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
    // console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("Props ", this.props);
    return (
      <div>
        <h4>Count #{this.props.count.id} </h4>
        <span className={this.getClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.handleIncrement(1)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.count.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
        <hr />
      </div>
    );
  }

  getClass() {
    let { value: count } = this.state;
    let classes = "btn m-2 btn-";
    return (classes += count === 0 ? "warning" : "primary");
  }

  formatCount() {
    let { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
