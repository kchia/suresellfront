import React, { Component } from 'react';
import HeadNav from './HeadNav';
import BaseNav from './BaseNav';
import Search from './Search';
import axios from 'axios';

import { Form, Button, Col, Card } from 'react-bootstrap';

class ViewAll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newSearch: '',
			featureList: [],

		};
	}
	
	handleChange = (event) => {
		this.setState({ newSearch: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault()
		let url = `https://dashboard.heroku.com/apps/suresell`;
		axios(url)
			.then((res) => res.data)
			.then((res) => {
				this.setState({ featureList: [...res] });
				console.log(this.state.featureList);
			});
	};

	render() {
		return (
			<div className='ViewAll'>
				<HeadNav />
				<div className='searchWrapper'>
					<Form className='ViewAllSearch' onSubmit={this.handleSubmit}>
						<Form.Row className='align-items-center'>
							<Col sm={9.5} className='my-1'>
								<Form.Control
									id='inlineFormInputName'
									placeholder='year, make, model, or trim'
									type='text'
									name='searchString'
									required
									onChange={this.handleChange}

								/>
							</Col>

							<Col xs='auto' className='my-1'>
								<Button type='submit' className='mb-2' id='Button'>
									Find
							</Button>
							</Col>
						</Form.Row>
					</Form>
				</div>


				<div id='autoCard'>
					<div className='headWrapper'>
						<div className='number'>20</div>
						<div className='makeModel'>
							Chevy Malibu
							<br />
							Sport
						</div>
					</div>
					<div className='bodyWrapper'>
						<div className='left'>
							<ul>
								<li>A</li>
								<li>B</li>
								<li>C</li>
								<li>D</li>
								<li>E</li>
							</ul>
						</div>
						<div className='right'>
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
				<BaseNav />
			</div>
		);
	}
}

export default ViewAll;
