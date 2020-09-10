import React, { Component } from "react";
import HeadNav from "./HeadNav";
import BaseNav from "./BaseNav";

import { Form, Button, Col } from "react-bootstrap";

class ViewAll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newSearch: "",
			carSpecs: [],
			car: null,
			allCars: null,
		};
	}

	handleChange = (event) => {
		this.setState({ newSearch: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		let url = `https://suresell.herokuapp.com/cars/`;
		let newArr = [];
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ carSpecs: [...res] });
				for (let i = 0; i < this.state.carSpecs.length; i++) {
					if (
						Object.values(this.state.carSpecs[i]).includes(
							this.state.newSearch
						)
					) {
						newArr.push(this.state.carSpecs[i]);
					}
				}
				this.setState({ carSpecs: newArr });
			});
	};
	componentDidMount() {
		let url = `https://cors-anywhere.herokuapp.com/https://suresell.herokuapp.com/cars/`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ carSpecs: [...res] });
			});
	}

	render() {
		return (
			<div className="ViewAll">
				<HeadNav />
				<div className="searchWrapper">
					<Form className="ViewAllSearch" onSubmit={this.handleSubmit}>
						<Form.Row className="align-items-center">
							<Col sm={9.5} className="my-1">
								<Form.Control
									id="inlineFormInputName"
									placeholder="year, make, model, or trim"
									type="text"
									name="searchString"
									required
									onChange={this.handleChange}
								/>
							</Col>

							<Col xs="auto" className="my-1">
								<Button type="submit" className="mb-2" id="Button">
									Find
                </Button>
							</Col>
						</Form.Row>
					</Form>
				</div>

				<div>
					{this.state.carSpecs.map(function (car, index) {
						return (
							<div id="autoCard">
								<div className="headWrapper">
									<div className="number">{car.year}</div>
									<div className="makeModel">
										{car.make} {car.model}
										<br />
										{car.trim}
									</div>
								</div>
								<div className="bodyWrapper">
									<div className="left">
										<ul>
											<li>A</li>
											<li>B</li>
											<li>C</li>
											<li>D</li>
											<li>E</li>
										</ul>
									</div>
									<div className="right">
										<ul>
											<li>A</li>
											<li>B</li>
											<li>C</li>
											<li>D</li>
											<li>E</li>
										</ul>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<BaseNav />
			</div>
		);
	}
}

export default ViewAll;
