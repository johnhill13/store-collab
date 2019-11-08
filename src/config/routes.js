// SECTION Libraries
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// SECTION Files
import Home from "../components/Home";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";
import ApiContainer from "../containers/apiContainer";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={ApiContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/productlist" component={ProductList} />
            <Route path="/productdetails" component={ProductDetails} />

        </Switch>
    );
};

export default withRouter(Routes);
