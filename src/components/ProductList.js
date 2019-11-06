import React, { Component } from "react";

const DATA = [
  {
    id: "1",
    name: "Item 1",
    description:
      "This is the potential description of some type. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cumque deleniti voluptas quo deserunt voluptatibus corporis, distinctio nemo ipsam, ipsum maiores magnam, molestias ratione nisi voluptatum non repellendus? Ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: "10.99"
  },
  {
    id: "2",
    name: "Item 2",
    description:
      "This is the potential description of some type. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cumque deleniti voluptas quo deserunt voluptatibus corporis, distinctio nemo ipsam, ipsum maiores magnam, molestias ratione nisi voluptatum non repellendus? Ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: "10.99"
  },
  {
    id: "3",
    name: "Item 3",
    description:
      "This is the potential description of some type. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cumque deleniti voluptas quo deserunt voluptatibus corporis, distinctio nemo ipsam, ipsum maiores magnam, molestias ratione nisi voluptatum non repellendus? Ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: "10.99"
  },
  {
    id: "4",
    name: "Item 4",
    description:
      "This is the potential description of some type. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cumque deleniti voluptas quo deserunt voluptatibus corporis, distinctio nemo ipsam, ipsum maiores magnam, molestias ratione nisi voluptatum non repellendus? Ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: "10.99"
  },
  {
    id: "5",
    name: "Item 5",
    description:
      "This is the potential description of some type. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cumque deleniti voluptas quo deserunt voluptatibus corporis, distinctio nemo ipsam, ipsum maiores magnam, molestias ratione nisi voluptatum non repellendus? Ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: "10.99"
  },
  {
    id: "6",
    name: "Item 6",
    description:
      "This is the potential description of some type. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cumque deleniti voluptas quo deserunt voluptatibus corporis, distinctio nemo ipsam, ipsum maiores magnam, molestias ratione nisi voluptatum non repellendus? Ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: "10.99"
  },
  {
    id: "7",
    name: "Item 7",
    description:
      "This is the potential description of some type. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cumque deleniti voluptas quo deserunt voluptatibus corporis, distinctio nemo ipsam, ipsum maiores magnam, molestias ratione nisi voluptatum non repellendus? Ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: "10.99"
  },
  {
    id: "8",
    name: "Item 8",
    description:
      "This is the potential description of some type. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit cumque deleniti voluptas quo deserunt voluptatibus corporis, distinctio nemo ipsam, ipsum maiores magnam, molestias ratione nisi voluptatum non repellendus? Ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    price: "10.99"
  }
];

class ProductList extends Component {
  render() {
    const productList = DATA.map(product => (
      <div className="container-fluid text-center border mx-auto my-2">
        <div className="row">
          <div class="col-md-4 my-2 mx-auto">
            <img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16e3dfacb62%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16e3dfacb62%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.671875%22%20y%3D%22104.565625%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              class="rounded"
              alt="..."
            />
          </div>
          <div class="col-md-4 my-2 mx-auto align-self-center">
            <p class="font-weight-bold">This could be the Title</p>
            <p class="font-weight-normal">{product.description}</p>
          </div>
          <div class="col-md-4 my-2 mx-auto align-self-center">
            <p class="font-weight-normal">This is price. {product.price}</p>
            <button type="button" class="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ));

    return <React.Fragment>{productList}</React.Fragment>;
  }
}

export default ProductList;
