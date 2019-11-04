// SECTION Libraries
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// SECTION Files
import Home from "../components/Home";
import CartPage from "../components/CartPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default withRouter(Routes);
