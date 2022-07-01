import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import img from '../assets/MR-Future-Products-2020-2.webp'
import { BsSuitHeart } from "react-icons/bs";

class Cards extends Component {
  state = {};
  render() {
    const props = this.props;

    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{props.productName}</Card.Title>
            <Card.Text>Product Description</Card.Text>
            <Button variant="warning" style={{ margin: "1px" }}>
              Buy Now
            </Button>
            <Button variant="danger">{<BsSuitHeart />}</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Cards;
