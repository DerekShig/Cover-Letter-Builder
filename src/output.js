import React from 'react';


const output = (props) => {
	return (
		<div className="letter">

			<p>To {props.text}</p>

			<p>Hi, my name is {props.names} and I am writing to express my interest in the {props.titles} position at {props.company}. 
			I would love to contribute to {props.company} because I resonate with the company culture and mission.</p>

			<p>As part of your team, I believe I can be an effective member of the company. In the past, 
			I've worked on many different development projects. {props.experience}</p>

			<p>Web development is my passion, and I would love an opportunity to work at {props.company}. 
			I look forward to discussing this opportunity further with you.</p>

			<p>Best,</p>

			<p>{props.names}</p>

		</div>
	)
};

export default output;