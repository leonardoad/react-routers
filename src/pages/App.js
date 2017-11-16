import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class App extends React.Component {
    render(){
        return (
        	  <div>
	        	  	<nav className="navbar has-shadow">
						<div className="navbar-menu">
						  <div className="navbar-start"> 
							     <IndexLink to="/" className="navbar-item is-tab"  activeClassName="is-active">Home</IndexLink> 
							     <Link to="/courses" className="navbar-item is-tab"  activeClassName="is-active">Courses</Link> 
							     <Link to="/about"   className="navbar-item is-tab"  activeClassName="is-active" >About</Link> 
						  </div>
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