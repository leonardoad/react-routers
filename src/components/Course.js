import React from 'react'

const courses = [
	{name: "React"},
	{name: "Android"},
	{name: "Java"},
	{name: "Redux"},
];

export default class Course extends React.Component {
    render(){
        return (
			<h1>You are at the {courses[this.props.params.id].name}  page.</h1>
        	);
    }
} 