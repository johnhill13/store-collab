import React, { Component } from "react";
import { API_URL } from "../constants";
import Axios from "axios";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";

class apiContainer extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    Axios.get(API_URL).then(response => {
    console.log(response.data.products)
      this.setState({
        products: response.data.products
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Categories products={this.state.products} />
      </React.Fragment>
    );
  }
}

export default apiContainer;
