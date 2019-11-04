import React from "react";

import ProductListing from "../features/product-listing/index";

export default function Home(props) {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <ProductListing />
    </div>
  );
}
