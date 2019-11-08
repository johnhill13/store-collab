import React, { Component } from "react";

export class ProductDetails extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center mx-auto my-2">
              {/* <!--Carousel Wrapper--> */}
              <div
                id="carousel-thumb"
                className="carousel slide carousel-fade carousel-thumbnails"
                data-ride="carousel"
              >
                {/* <!--Slides--> */}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                {/* <!--/.Slides--> */}
                {/* <!--Controls--> */}
                <a
                  className="carousel-control-prev"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
                {/* <!--/.Controls--> */}
                {/* <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-thumb"
                    data-slide-to="0"
                    className="active"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"
                      width="100"
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to="1">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg"
                      width="100"
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to="2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg"
                      width="100"
                    />
                  </li>
                </ol> */}
              </div>
              {/* <!--/.Carousel Wrapper--> */}
            </div>
            <div className="col-md-4 text-center align-self-center mx-auto my-2">
              <div className="jumbotron mb-0">
                <p className="font-weight-normal">This is price. 10.99</p>
                {/* not sure if we want quantity here or not */}
                <p className="font-weight-normal">QTY:</p>
                <button type="button" className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="col-md-8 my-2 mx-auto text-align-center">
              <p className="font-weight-bold">This could be the Title</p>
              <p className="font-weight-normal">
                 Probably the product description down here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quibusdam consequuntur pariatur dolore minus, veniam quis quam,
                cumque excepturi laborum nisi! Iusto ex magni molestias delectus
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
