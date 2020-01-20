import React from 'react';


const position = (props) => {
	return (
		<div>

			<label  for="position">Position/Title: </label>
			<input id="position" type="text" onChange={props.name} value={props.val}/>

		</div>
	)
};

export default position;