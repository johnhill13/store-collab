import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Welcome to our shop</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">
                            An app created with React that has everything you need!
            </h2>
                        <Link to="/categories" className="btn btn-primary get-started-btn">
                            Get Started
            </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Home;
