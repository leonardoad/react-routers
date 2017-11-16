import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';


import App from './pages/App'
import Courses from './pages/Courses'
import About from './pages/About'

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App} >
				<Route path='/courses' component={Courses} />
				<Route path='/about' component={About} />
			</Route>
		</Router>
		),
        document.querySelector('[data-js="app"]')
        )

