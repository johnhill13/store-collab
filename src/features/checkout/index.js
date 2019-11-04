import React from "react";
import { connect } from "react-redux";

function Checkout(props) {
  return (
    <div>
      <h1>Check</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
