import React, { Component } from "react";

import ProductListing from "../features/product-listing/index";

import data from "../data/products.json";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Home Page</h1>
        <ProductListing products={data.products} />
      </div>
    );
  }
}

export default Home;
