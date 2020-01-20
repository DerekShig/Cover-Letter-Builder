import React from 'react';


const project = (props) => {
	return (

		<div>

			<label  for="project">Experience: </label>
			
			<textarea id="project" type="text" onChange={props.name} value={props.val}></textarea>

		</div>
	)
};

export default project;
//<input id="project" type="text" onChange={props.name} value={props.val}/>