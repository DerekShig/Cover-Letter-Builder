import React from 'react';


const layoutTwo = (props) => {
	return (
		<div className="letter">

			<p>Dear {props.text}</p>

			<p>Hi! My name is {props.names} and I am interested in joining your team for the {props.titles} position at your company! 
			I'm applying because the engineers at {props.company} are smart and solve very challenging problems. I'd love to be part of {props.company}'s 
			innovation and work with your talented team.</p>

			<p>I beleive I have accumulated a skill set that I can use to contribute to meaningful projects at {props.company}. {props.experience}</p>

			<p>I am really passionate about this field of work, and I would love a chance to work at {props.company} to do great work. 
			Hope to hear from you soon to discuss this position futher!</p>

			<p>Kind regards,</p>

			<p>{props.names}</p>

		</div>
	)
};

export default layoutTwo;