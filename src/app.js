import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import App from './pages/App'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App} >
				<IndexRoute component={Home} />
				<Route path='/courses' component={Courses} />
				<Route path='/about' component={About} />
			</Route>
		</Router>
		),
        document.querySelector('[data-js="app"]')
        )

