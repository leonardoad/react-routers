import React from 'react'

export default class Courses extends React.Component {
    render(){
        return (
        	<div>
				<h1 className="title">Meet our courses!</h1>
				{this.props.children}
        	</div>
        	);
    }
} 