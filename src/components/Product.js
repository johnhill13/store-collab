import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ image, name, description, price, onClickProduct, selectedProductObject }) {
    {console.log(selectedProductObject)}
    return (
        <div className="container-fluid text-center border mx-auto my-2" onClick={onClickProduct}>
            <div className="row">
                <div className="col-md-4 my-2 mx-auto">
                    <img
                    name={name}
                        src={image}
                        className="rounded product-image"
                        alt="..."
                    />{" "}
                </div>
                <div className="col-md-4 my-2 mx-auto align-self-center">
                    <p className="font-weight-bold">{name}</p>
                    <p className="font-weight-normal">{description}</p>
                    <Link to="/productdetails" className="stretched-link">
                        Product Details
                    </Link>
                </div>
                <div className="col-md-4 my-2 mx-auto align-self-center">
                    <p className="font-weight-normal">$ {price}</p>
                    <button type="button" className="btn btn-primary">
                        Add to Cart
            </button>
                </div>
            </div>
        </div >
    )
}
