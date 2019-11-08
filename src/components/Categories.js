import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import ProductList from "./ProductList";

const Categories = (props) => {
  console.log(props.products)
  // console.log(products)
  // const listCategory = {products}.map(category => (
  //   <div className="col-lg-3 col-md-4 col-sm-6 my-2 text-center">
  //     <div className="card bg-dark text-black">
  //       <img
  //         className="card-img"
  //         src="https://usapears.org/wp-content/uploads/2015/08/v-bartlett.png"
  //         alt="Pear"
  //       />
  //       <div className="card-body bg-dark text-white">
  //         <h5 className="card-title">{category.name}</h5>
  //       </div>
  //     </div>
  //   </div>
  // ));


  return (
    <React.Fragment>
      <Title name="Categories" title="All Items" />
      <div className="container">
        {/* listCategory maps the JSON response and renders that number of categories */}
        <Link className="nav-link" to="/productList">
          {/* <div className="row">{listCategory}</div> */}
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Categories;
