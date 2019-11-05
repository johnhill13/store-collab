import React, { Component, Card, Img } from "react";

import Title from "./Title";

const DATA = [
  {
    id: "1",
    name: "Clothes"
  },
  {
    id: "2",
    name: "Technology"
  },
  {
    id: "3",
    name: "Food"
  },
  {
    id: "4",
    name: "Outdoors"
  },
  {
    id: "5",
    name: "Cosmetics"
  },
  {
    id: "6",
    name: "Accessories"
  },
  {
    id: "7",
    name: "Furniture"
  },
  {
    id: "8",
    name: "Vehicles"
  }
];

class Categories extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    fetch("")
      .then(response => response.json())
      .then(({ results: items }) => this.setState({ items }))
      .catch(function(error) {
        console.log("failed", error);
      });
  }

  render() {
    const listCategory = DATA.map(category => (
        <div className="col-lg-3 col-md-4 col-sm-6 my-2 text-center">
          <div className="card bg-dark text-black">
            <img
              className="card-img"
              src="https://usapears.org/wp-content/uploads/2015/08/v-bartlett.png"
              alt="Pear"
            />
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">{category.name}</h5>
            </div>
          </div>
        </div>
    ));

    let items = this.state.items;

    return (
      <React.Fragment>
        <Title name="Categories" title="All Items" />
        <div className="container">
          {/* listCategory maps the JSON response and renders that number of categories */}
          <div className="row">{listCategory}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Categories;
