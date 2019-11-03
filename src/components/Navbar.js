import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
