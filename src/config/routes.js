// SECTION Libraries
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// SECTION Files
import Home from "../components/Home";
import Categories from "../components/Categories";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/categories" component={Categories} />
      <Route path="/cart" component={Cart} />
      <Route path="/productlist" component={ProductList} />
    </Switch>
  );
};

export default withRouter(Routes);
