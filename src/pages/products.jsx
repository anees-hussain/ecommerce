import React, { Component } from "react";
import Cards from "../components/cards";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Products extends Component {
  state = {
    data: [
      {
        productName: "Product 1",
        description: "Description 1",
        price: "43",
      },
      {
        productName: "Product 2",
        description: "Description 2",
        price: "20",
      },
      {
        productName: "Product 3",
        description: "Description 3",
        price: "45",
      },
      {
        productName: "Product 4",
        description: "Description 4",
        price: "32",
      },
      {
        productName: "Product 5",
        description: "Description 5",
        price: "23",
      },
      {
        productName: "Product 6",
        description: "Description 6",
        price: "23",
      },
      {
        productName: "Product 7",
        description: "Description 7",
        price: "23",
      },
      {
        productName: "Product 8",
        description: "Description 8",
        price: "23",
      },
      {
        productName: "Product 9",
        description: "Description 9",
        price: "23",
      },
      {
        productName: "Product 10",
        description: "Description 10",
        price: "23",
      },
      {
        productName: "Product 11",
        description: "Description 11",
        price: "23",
      },
      {
        productName: "Product 12",
        description: "Description 12",
        price: "23",
      },
    ],
  };

  render() {
    return (
      <>
        <p>Products</p>
        <Container>
          <Row>
            {this.state.data.map((p) => (
              <Col xs={7} md={2}>
                <Cards
                  key={p.productName}
                  productName={p.productName}
                  description={p.description}
                  price={p.price}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Products;
