import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Categories = ({ categories, onClickCategory }) => {
    const listCategory = categories.map(category => (
        < div className="col-lg-3 col-md-4 col-sm-6 my-2 text-center" key={category.name} onClick={onClickCategory} >
            <div className="card bg-dark text-black">
                <img
                    className="card-img category-image"
                    src={category.image}
                    alt={category.name}
                    name={category.name}
                />
                <div className="card-body bg-dark text-white">
                    <h5 className="card-title">{category.name}</h5>
                </div>
            </div>
        </div >
    ));


    return (

        <>
            <Title name="Categories" title="All Items" />
            <div className="container">
                {/* listCategory maps the JSON response and renders that number of categories */}
                <Link className="nav-link" to="/categories/productlist">
                    <div className="row">{listCategory}</div>
                </Link>
            </div>
        </>
    );
};

export default Categories;
