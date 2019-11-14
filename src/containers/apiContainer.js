import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { API_URL } from "../constants";
import Axios from "axios";
import Categories from "../components/Categories";
import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';


class apiContainer extends Component {
    state = {
        products: [],
        categories: [],
        selectedcategory: '',
        selectedProductName: '',
        selectedProductObject: {},
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
    };

    onClickProduct = async(event) => {
        let clickedProductName = event.target.name;
        this.setState({ selectedProductName: clickedProductName });
        this.setProductObj();
    };

    setProductObj = () => {
        this.state.products.forEach(product => {
            // console.log(product.name)
            // console.log("selected" + this.state.selectedProductName)
            if (product.name === this.state.selectedProductName) {
                this.setState({ selectedProductObject: product })
            };
        });
    };



    render() {
        // console.log(this.state)
        return (
            <>
                <Switch>
                    <Route
                        exact
                        path="/categories/productlist"
                        render={props => <ProductList products={this.state.products} selectedCategory={this.state.selectedcategory} onClickProduct={this.onClickProduct} selectedProductObject={this.state.selectedProductObject} />}
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
                    <Route exact path="/categories/productlist/productdetails" render={(props) => <ProductDetails products={this.state.products} onClickProduct={this.onClickProduct} />} />
                </Switch>
            </>
        );
    }
}

export default apiContainer;
