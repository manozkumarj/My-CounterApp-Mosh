import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Navbar
        <span className="badge m-2 badge-pill badge-primary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
