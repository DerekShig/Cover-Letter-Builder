import React from 'react';


const company = (props) => {
	return (
		<div>

			<label  for="company">Company: </label>
			<input id="company" type="text" onChange={props.name} value={props.val}/>

		</div>
	)
};

export default company;