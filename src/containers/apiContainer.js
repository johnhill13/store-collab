import React, { Component } from "react";
import { API_URL } from "../constants";
import Axios from "axios";
// import ProductList from "../components/ProductList";
import Categories from "../components/Categories";

class apiContainer extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        Axios.get(API_URL)
            .then(response => {
                console.log("This is the response", response.data.products)
                console.log("This is the state", this.state)

                this.setState({
                    products: response.data.products
                });
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <>
                <Categories products={this.state.products} />
            </>
        );
    }
}

export default apiContainer;
