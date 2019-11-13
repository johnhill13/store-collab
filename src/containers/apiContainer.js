import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { API_URL } from "../constants";
import Axios from "axios";
import Categories from "../components/Categories";
import ProductList from '../components/ProductList';


class apiContainer extends Component {
    state = {
        products: [],
        categories: [],
        selectedcategory: '',
    };

    componentDidMount() {
        this.getProducts();
        this.getCategories();
    }

    getProducts = () => {
        Axios.get(`${API_URL}/products`)
            .then(response => {
                this.setState({
                    products: response.data.products
                });
            })
            .catch(err => console.log(err));
    };
    getCategories = () => {
        Axios.get(`${API_URL}/categories`)
            .then(response => {
                this.setState({
                    categories: response.data.categories
                });
            })
            .catch(err => console.log(err));
    };
    onClickCategory = (event) => {
        this.setState({ selectedcategory: event.target.name });
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Switch>
                    <Route
                        exact
                        path="/categories/productlist"
                        render={props => <ProductList products={this.state.products} selectedCategory={this.state.selectedcategory} />}
                    />
                    <Route
                        exact
                        path="/categories"
                        render={props => (
                            <Categories
                                categories={this.state.categories}
                                products={this.state.products}
                                onClickCategory={this.onClickCategory}
                                selectedCategory={this.state.selectedcategory}
                            />
                        )}
                    />
                </Switch>
            </>
        );
    }
}

export default apiContainer;
