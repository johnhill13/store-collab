import React, { Component, Card, Img } from "react";

import Title from './Title';


class Categories extends Component {
  render() {
    return (
      <React.Fragment>
        <Title name="Categories" title="All Items"/>
        <div className="card-deck col-10 row mx-auto my-2 text-center">
          <div className=" card bg-dark text-black">
            <img className="card-img" src="https://usapears.org/wp-content/uploads/2015/08/v-bartlett.png" alt="Pear" />
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">Pears</h5>
            </div>
          </div>
          <div className="card bg-dark text-black">
            <img className="card-img" src="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/primary_b81c9eb8-c227-4290-9ac5-f519de889802.jpg" alt="Oranges" />
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">Oranges</h5>
            </div>
          </div>
          <div className="card bg-dark text-white">
            <img className="card-img" src="https://media.licdn.com/dms/image/C4E0BAQH78e3EtPWnEg/company-logo_200_200/0?e=2159024400&v=beta&t=8lr3Xm0OctUPn68LkX4iUi9IYuVIGI82v7UvyOwI4-U" alt="Apples" />
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">Apples</h5>
            </div>
          </div>
          <div className="card bg-dark text-black">
            <img className="card-img" src="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/primary_417d89ed-1022-48ac-83fb-49cc5b67b5fc.jpg" alt="Bananas" />
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">Bananas</h5>
            </div>
          </div>
          <div className="card bg-dark text-black">
            <img className="card-img" src="https://s3.amazonaws.com/ucdim/wp-content/uploads/20180220163904/Feb_26_StrawberryDay_Body2_464456760-200x200.jpg" alt="Strawberry" />
            <div className="card-body bg-dark text-white">
              <h5 className="card-text">Strawberry</h5>
            </div>
          </div>
          <div className="card bg-dark text-black">
            <img className="card-img" src="https://images-na.ssl-images-amazon.com/images/I/71%2BqAJehpkL._AC_UL200_SR200,200_.jpg" alt="Pineapple" />
            <div className="card-body bg-dark text-white">
              <h5 className="card-text">Pineapples</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Categories;
