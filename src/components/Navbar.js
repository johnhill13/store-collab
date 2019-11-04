import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/categories">
          Categories
        </Link>
        <Link className="nav-link" to="/cart">
          Cart ({cart.reduce((acc, item) => {
            return acc + item.quantity
          }, 0)})
        </Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Navbar);
