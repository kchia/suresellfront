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
		
		username: '',
		password: '',
		login: ''
	};

	//needs token to be passed as header for each request
	handleLogin = (event) => {
		event.preventDefault();
		const url = `https://suresell.herokuapp.com/api/token/`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				this.setState({
					token: this.state.token,
					
					username: this.state.username,
					password: this.state.password,
					login: localStorage.getItem('token') ? true : false,
				});
				console.log(res);
				localStorage.setItem('token', res.access)
				if (this.state.login) {
					
						return <ViewAll />
					
				}else{
					console.log('bye bitch')
				}
			});
			
	};
	handleLogout = () => {
		localStorage.removeItem('token');
		this.setState({
			token: '',
			email: '',
			username: '',
			password: '',
			login: false,
		});
	};
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
						return (
							<Login
								handleLogout={this.handleLogout}
								handleLogin={this.handleLogin}
								handleChangeEmail={this.handleChangeEmail}
								handleChangePassword={this.handleChangePassword}
								handleChangeUsername={this.handleChangeUsername}
							/>
						);
					}}
				/>
				<Route path='/about' component={About} />
				<Route path='/viewall' component={ViewAll} />
				<Route path='/add' component={Add} />
				<Route path='/search' component={Search} />
			</div>
		);
	}
}

export default App;
