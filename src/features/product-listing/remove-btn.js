import React from "react";

export default function RemoveBtn(props) {
  return (
    <button
      onClick={() => props.removeFromCart(props.cartItem)}
      className="btn btn-danger"
    >
      Remove
    </button>
  );
}
