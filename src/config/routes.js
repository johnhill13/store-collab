// SECTION Libraries
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// SECTION Files
import Home from "../components/Home";
import Cart from "../components/Cart";

import ProductDetails from "../components/ProductDetails";
import apiContainer from "../containers/apiContainer";
import ProductList from "../components/ProductList";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={apiContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/categories/productlist" component={ProductList} />
            <Route path="/productdetails" component={ProductDetails} />
        </Switch>
    );
};

export default withRouter(Routes);
