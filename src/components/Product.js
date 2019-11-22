import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ id, image, name, description, price, onClickProduct, selectedProductObject }) {
    // {console.log(selectedProductObject)}
    return (
        <div className="container-fluid text-center border mx-auto my-2" >
            <div className="row" >
                <div className="col-md-4 my-2 align-self-center mx-auto" >
                    <img
                        name={name}
                        style={{ height: 'auto', width: '100%' }}
                        src={image}
                        className="rounded"
                        alt="..."
                    />{" "}
                </div>
                <div className="col-md-4 my-2 mx-auto align-self-center" onClick={onClickProduct} >
                    <p className="font-weight-bold">{name}</p>
                    <p className="font-weight-normal">{description}</p>
                    <Link to="/categories/productlist/productdetails" id={id} className="stretched-link">
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
