import React from 'react';


const name = (props) => {
	return (

		<div>

			<label  for="name">Name: </label>
			<input id="name" type="text" onChange={props.input} value={props.val}/>

		</div>
	)
};

export default name;