import React, { Component } from "react";
import Cards from "../components/cards";
class Products extends Component {
  state = {};
  render() {
    return (
      <>
        <p>Products</p>
        <Cards productName="Demo Product" />
      </>
    );
  }
}

export default Products;
