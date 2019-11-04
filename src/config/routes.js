// SECTION Libraries
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// SECTION Files
import Home from "../components/Home";
import CartPage from "../components/CartPage";
import CheckoutPage from "../components/CheckoutPage";
import OrdersPage from "../components/OrdersPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/orders/:id" component={OrdersPage} />
    </Switch>
  );
};

export default withRouter(Routes);
