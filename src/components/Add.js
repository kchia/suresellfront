import React, { Component } from 'react';
import HeadNav from './HeadNav';
import BaseNav from './BaseNav';
import AddForm from './AddForm';
//import FeatureList from './FeatureList'
import { Form, Row, Col, Button } from 'react-bootstrap';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			year: '',
			make: '',
			model: '',
			trim: '',
		};
	}

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
			<div className='Add'>
				<HeadNav />

				<Form className='AddField'>
					Add a Car<br/><br/>
					Vehicle Specs
					<Row>
						<Col>
							<Form.Control
								placeholder='Year'
								type='text'
								name='searchString'
								required
								onChange={this.handleChangeYear}
								value={this.state.year}
							/>
						</Col>
						<Col>
							<Form.Control
								placeholder='Make'
								type='text'
								name='searchString'
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
								placeholder='Model'
								type='text'
								name='searchString'
								required
								onChange={this.handleChangeModel}
								value={this.state.model}
							/>
						</Col>
						<Col>
							<Form.Control
								placeholder='Trim'
								type='text'
								name='searchString'
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
					type='submit'
					className='AddCard'
					onSubmit={this.handleSubmit}
					variant='primary'
					size='lg'
					block>
					Make Card

				</Button>

				<BaseNav />
			</div>
		);
	}
}

export default Add;
