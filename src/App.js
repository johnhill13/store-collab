// SECTION Libraries
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// SECTION Files
import Navbar from "./components/Navbar";
import Routes from "./config/routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes />
      </>
    );
  }
}

export default withRouter(App);
