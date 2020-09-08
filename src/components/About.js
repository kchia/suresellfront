import React from 'react';
import { Accordion, Card, Jumbotron, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadNav from './HeadNav';
import BaseNav from './BaseNav';

function About() {
	const members = [
		{
			name: 'Jason Choi',
			githubLink: 'https://github.com/jasonbchoi',
			linkedInLink: 'https://www.linkedin.com/in/jasonbchoi',
		},
		{
			name: 'Alex Powers',
			githubLink: 'https://github.com/alexpowers429',
			linkedInLink: 'https://www.linkedin.com/in/alex-powers-dev/',
		},
	];
	return (
		<div className='About'>
			<HeadNav />
			<Jumbotron className='about'>
				<h1>SureSell:</h1>
				<p className='body'>
					Welcome friend! If you're looking to improve the quantity and quality
					of your sales, then look no further! SureSell is a quick and easy way
					to reference any of your inventories' key selling features by creating
					visual cards you can quickly sort through, yourself!
					<br />
					<br />
					SureSell will help make the impression that you are a product expert!
				</p>
			</Jumbotron>
			<BaseNav />
		</div>
	);
}

export default About;
