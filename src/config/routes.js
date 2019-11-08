// SECTION Libraries
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// SECTION Files
import Home from "../components/Home";
import Categories from "../components/Categories";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";
import ApiContainer from "../containers/apiContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/categories" component={Categories} />
      <Route path="/cart" component={Cart} />
      <Route path="/productlist" component={ProductList} />
      <Route path="/productdetails" component={ProductDetails} />
      <Route path="/apicontainer" component={ApiContainer} />
    </Switch>
  );
};

export default withRouter(Routes);
