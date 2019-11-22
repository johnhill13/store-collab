// SECTION Libraries
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// SECTION Files
import Home from "../components/Home";
import Cart from "../components/Cart";
import apiContainer from "../containers/apiContainer";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={apiContainer} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
};

export default withRouter(Routes);
