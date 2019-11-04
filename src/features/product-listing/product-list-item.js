import React from "react";
import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";

const ProductListItem = props => {
  return (
    <div className="card-body">
      <div className="row">
        <h3>{props.product.name}</h3>
      </div>
      <div className="row text-center">
        <img
          src={props.product.image}
          height={100}
          title={props.product.name}
          alt="Image"
        />
      </div>
      <div className="row">
        <h5>{props.product.description}</h5>
      </div>
      <div className="row">
        <h5>$ {props.product.price}</h5>
      </div>
      <div className="row">
        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />
        {props.cartItem ? (
          <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProductListItem;
