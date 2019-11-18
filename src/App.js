import React, { Component } from "react";
import Navbar from "./Navbar";
import Counters from "./Counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - constructor");
  }

  componentDidMount() {
    // AJAX call
    console.log("App - Mounted");
  }

  handleDelete = counterId => {
    // console.log("handleDelete triggered -> ", counterId);
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    // console.log("handleReset triggered -> ");
    let counter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  handleIncrement = counter => {
    // console.log("Triggered handleIncrement func ", counter);
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
