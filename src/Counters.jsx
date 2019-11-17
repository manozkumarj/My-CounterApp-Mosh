import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("handleDelete triggered -> ", counterId);
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(count => (
          <Counter key={count.id} onDelete={this.handleDelete} count={count} />
        ))}
      </div>
    );
  }
}

export default Counters;
