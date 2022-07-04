import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { BsSuitHeart } from "react-icons/bs";

import img from "../assets/MR-Future-Products-2020-2.webp";

class Cards extends Component {
  state = {
    qty: 0,
  };

  render() {
    const { productName, description, price } = this.props;
    const { qty } = this.state;

    return (
      <>
        <Card style={{ width: "12rem", marginBottom: "1rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{productName}</Card.Title>

            <Card.Text>${price}</Card.Text>
            <Card.Text>{description}</Card.Text>

            <Button variant="warning" style={{ margin: "1px" }}>
              Buy Now
            </Button>

            <Button variant="danger" style={{ marginLeft: "5px" }}>
              {<BsSuitHeart />}
            </Button>

            <Button
              variant="danger"
              size="sm"
              style={{ marginLeft: "5px" }}
              onClick={() =>
                this.state.qty > 0
                  ? this.setState({ qty: this.state.qty - 1 })
                  : this.setState({ qty: this.state.qty })
              }
            >
              -
            </Button>

            <input
              size={1}
              style={{ marginLeft: "5px" }}
              value={qty}
              onChange={(e) => this.setState({ qty: e.target.value })}
            />

            <Button
              variant="success"
              size="sm"
              style={{ marginLeft: "5px" }}
              onClick={() => this.setState({ qty: this.state.qty + 1 })}
            >
              +
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Cards;
