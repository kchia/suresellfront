import React, { Component } from "react";
import HeadNav from "./HeadNav";
import BaseNav from "./BaseNav";
import AddForm from "./AddForm";
//import FeatureList from './FeatureList'
import { Form, Row, Col, Button } from "react-bootstrap";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      make: "",
      model: "",
      trim: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const data = new FormData(event.target);

    fetch(
      "https://cors-anywhere.herokuapp.com/https://suresell.herokuapp.com/cars/",
      {
        method: "POST",
        body: data,
      }
    );
  };
  handleChangeYear = (event) =>
    this.setState({
      year: event.target.value,
    });
  handleChangeMake = (event) =>
    this.setState({
      make: event.target.value,
    });
  handleChangeModel = (event) =>
    this.setState({
      model: event.target.value,
    });
  handleChangeTrim = (event) =>
    this.setState({
      trim: event.target.value,
    });

  render() {
    return (
      <div className="Add">
        <HeadNav />

        <Form className="AddField">
          Add a Car
          <br />
          <br />
          Vehicle Specs
          <Row>
            <Col>
              <Form.Control
                placeholder="Year"
                type="text"
                name="year"
                required
                onChange={this.handleChangeYear}
                value={this.state.year}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Make"
                type="text"
                name="make"
                required
                onChange={this.handleChangeMake}
                value={this.state.make}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Control
                placeholder="Model"
                type="text"
                name="model"
                required
                onChange={this.handleChangeModel}
                value={this.state.model}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Trim"
                type="text"
                name="trim"
                required
                onChange={this.handleChangeTrim}
                value={this.state.trim}
              />
            </Col>
          </Row>
        </Form>
        <br />

        <AddForm />

        <Button
          type="submit"
          className="AddCard"
          onSubmit={this.handleSubmit}
          variant="primary"
          size="lg"
          block
        >
          Make Card
        </Button>

        <BaseNav />
      </div>
    );
  }
}

export default Add;
