import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Login() {
	return (
		<div className='bg-img'>
		<div className='Login'>
			
			<Form className='LoginForm'>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>

				<Button id='LoginButton' href='/search' variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div></div>
	);
}

export default Login;
