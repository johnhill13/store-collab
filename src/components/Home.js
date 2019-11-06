import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">Welcome to our shop</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              An app created with React that has everything you need!
            </h2>
            <Link to="/categories" class="btn btn-primary get-started-btn">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
