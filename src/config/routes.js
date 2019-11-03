// SECTION Libraries
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// SECTION Files
import Home from "../components/Home";
import Categories from "../components/Categories";
import Cart from "../components/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/categories" component={Categories} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default withRouter(Routes);
