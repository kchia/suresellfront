import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Headnav from './HeadNav';
import Basenav from './BaseNav';
// import InfoCard from './InfoCard';

// handleChange = (event) => {
//     this.setState({ searchString: event.target.value });
// };


function Search(props) {
	return (
		<div className='Search'>
			<Headnav />
			<h4>Search</h4>

			<Form inline className='SearchBar'>
				<Form.Control
					className='mb-2 mr-sm-2'
					id='inlineFormInputName2'
					placeholder='i.e. year, make, model, or trim'
				/>

				<Button type='submit' className='mb-2' id='Button'>
					Find
				</Button>
				<Form.Text className='text-muted'></Form.Text>
			</Form>
			<Basenav />
		</div>
	);
}

export default Search;
