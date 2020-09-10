import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class AddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feature: '',
			carSpecs: [],
		};
	}
	clearForm = () => {
		this.setState({ feature: '' });
	};
	handleChange = (event) =>
		this.setState({
			feature: event.target.value,
		});
	addFeature = (event) => {
		event.preventDefault();
		this.state.carSpecs.push(this.state.feature);
		console.log(this.state.carSpecs);
		this.setState({ features: this.state.feature });
		this.clearForm()
	};

	render() {
		return (
			<div className='AddForm'>
				<ul className='carSpecs'>
					{this.state.carSpecs.map((item) => (
						<li className='featureItem' key={item}>{item}</li>
					))}
				</ul>
				<Form inline className='AddFeature' onSubmit={this.addFeature}>
					Add Feature
					<Form.Control
						className='mb-2 mr-sm-2'
						id='inlineFormInputName2'
						placeholder='Feature'
						type='text'
						name='searchString'
						required
						onChange={this.handleChange}
						value={this.state.feature}
					/>
					<Button type='submit' className='mb-2' id='Button'>
						+
					</Button>
					<Form.Text className='text-muted'>**Abbreviate Features**</Form.Text>
				</Form>
			</div>
		);
	}
}

export default AddForm;
