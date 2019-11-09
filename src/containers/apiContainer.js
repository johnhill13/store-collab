import React, { Component } from "react";
import { API_URL } from "../constants";
import Axios from "axios";
import Categories from "../components/Categories";

class apiContainer extends Component {
    state = {
        products: [],
        categories: []
    };

    componentDidMount() {
        this.getProducts();
        this.getCategories();
    }

    getProducts = () => {
        Axios.get(`${API_URL}/products`)
            .then(response => {
                console.log("This is the products response", response)
                this.setState({
                    products: response.data.products
                });
            })
            .catch(err => console.log(err))
    };
    getCategories = () => {
        Axios.get(`${API_URL}/categories`)
            .then(response => {
                console.log("This is the categories response", response)
                this.setState({
                    categories: response.data.categories
                });
            })
            .catch(err => console.log(err))
    };


    render() {
        console.log("This is the products state", this.state.products)
        console.log("This is the categories state", this.state.categories)
        return (
            <>
                <Categories categories={this.state.categories} products={this.state.products} />
            </>
        );
    }
}

export default apiContainer;
