import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import About from './components/About';
import Add from './components/Add';
import Search from './components/Search';
import ViewAll from './components/ViewAll';

class App extends Component {
	state = {
		token: '',
		email: 'test',
		username: 'test1',
		password: 'test2',

	}


	//needs token to be passed as header for each request
	handleSubmit = (event) => {
		event.preventDefault()
		const url = `https://suresell.herokuapp.com/users/register`
		fetch(url, {
			method: 'POST',
			// headers: {
			// 	'Authorization': "Bearer " + this.state.token 

			// },
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
				email: this.state.email
			})
		}
		)
	}


	handleChangeEmail = (event) =>
		this.setState({
			email: event.target.value,
		});
	handleChangeUsername = (event) =>
		this.setState({
			username: event.target.value,
		});
	handleChangePassword = (event) =>
		this.setState({
			password: event.target.value,
		});




	render() {
		return (
			<div className='App'>
				<Route
					path='/'
					exact

					render={() => {
						return <Login
							handleSubmit={this.handleSubmit} handleChangeEmail={this.handleChangeEmail}
							handleChangePassword={this.handleChangePassword}
							handleChangeUsername={this.handleChangeUsername} />;
					}}
				/>
				<Route path='/about' component={About} />
				<Route path='/viewall' component={ViewAll} />
				<Route path='/add' component={Add} />
				<Route
					path='/search'
					component={Search}
				/>
			</div>
		);
	}
}

export default App;
