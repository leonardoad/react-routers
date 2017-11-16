import React from 'react'

export default class App extends React.Component {
    render(){
        return (
        	  <div>
	        	  	<nav className="navbar ">
						<div className="tabs">
						  <ul>
							    <li><a href="#/" className="navbar-item">Home</a> </li>
							    <li><a href="#/courses" className="navbar-item">Courses</a> </li>
								<li><a href="#/about" className="navbar-item">About</a> </li>
						  </ul>
						</div>
					</nav>

					<section className="section">
						<div className="container">
							{this.props.children}
						</div>
					</section>
        	  </div>

        	);
    }
} 