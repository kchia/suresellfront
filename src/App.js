import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import About from './components/About';
import Add from './components/Add';
import Search from './components/Search';
import ViewAll from './components/ViewAll';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Route
					path='/'
					exact
					render={() => {
						return <Login />;
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
