import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

export class ProductDetails extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="font-weight-bold mx-auto my-2">This could be the Item Title</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 text-center mx-auto my-2">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1573331097320-d6c1d8c3e0f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                    alt="unsplash temp"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1572876828821-2358b3e65be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                    alt="unsplash temp"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1573091474649-91ffc430c03d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                    alt="unsplash temp"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-4 text-center align-self-center mx-auto my-2">
              <div className="jumbotron mb-0">
                <p className="font-weight-normal">This is price. 10.99</p>
                <button type="button" className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-0">
              <p className="font-weight-bold">This could be the Title</p>
              <p className="font-weight-normal">
                Probably the product description down here. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Dicta quibusdam
                consequuntur pariatur dolore minus, veniam quis quam, cumque
                excepturi laborum nisi! Iusto ex magni molestias delectus
                impedit, dicta dolorum deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
