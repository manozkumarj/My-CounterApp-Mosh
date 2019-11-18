import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Navbar
          <span className="badge m-2 badge-pill badge-primary">
            {this.props.totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default Navbar;
