import React from 'react'

export default function Product({ image, name, description, price }) {
    return (
        <div className="container-fluid text-center border mx-auto my-2">
            <div className="row">
                <div className="col-md-4 my-2 mx-auto">
                    <img
                        src={image}
                        className="rounded product-image"
                        alt="..."
                    />{" "}
                </div>
                <div className="col-md-4 my-2 mx-auto align-self-center">
                    <p className="font-weight-bold">{name}</p>
                    <p className="font-weight-normal">{description}</p>
                    <a href="/productdetails" className="stretched-link">
                        Product Details
            </a>
                </div>
                <div className="col-md-4 my-2 mx-auto align-self-center">
                    <p className="font-weight-normal">$ {price}</p>
                    <button type="button" className="btn btn-primary">
                        Add to Cart
            </button>
                </div>
            </div>
        </div>
    )
}
