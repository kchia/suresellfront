import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Login(props) {
	return (
		<div className='bg-img'>
			<div className='Login'>

				<Form className='LoginForm' onSubmit={props.handleSubmit}>
					<Form.Group controlId='email'>
						<Form.Label >Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
						<Form.Text id='muted' >
							We'll never share your email with anyone else.
					</Form.Text>
					</Form.Group>

					<Form.Group controlId='username'>
						<Form.Label>Username</Form.Label>
						<Form.Control type='Username' placeholder='Username' />
					</Form.Group>

					<Form.Group controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>



					<Button id='LoginButton' variant='primary' type='submit' href='/viewall'>
						Login
				</Button>
				</Form>
			</div></div>
	);
}

export default Login;
