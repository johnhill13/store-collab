import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const ProductDetails = ({ products, selectedProductId }) => {
    // console.log("These are the products : ", products, selectedProductId)
    // console.log(typeof (parseFloat(selectedProductId)))
    const filteredProduct = products.filter(product => {
        return product.id === parseFloat(selectedProductId)
    })
    console.log(filteredProduct)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p className="font-weight-bold mx-auto my-2">{filteredProduct[0]['name']}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 text-center mx-auto my-2">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={filteredProduct[0]['image']}
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
                            <p className="font-weight-normal">$ {filteredProduct[0]['price']}</p>
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
                        <p className="font-weight-bold">{filteredProduct[0]['name']}</p>
                        <p className="font-weight-normal">
                            {filteredProduct[0]['description']}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
