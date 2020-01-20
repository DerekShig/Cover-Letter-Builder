import React from 'react';


const form = (props) => {
	return (
		<div>

			<label  for="Recipient">Recipient: </label>
			<input id="Recipient" type="text" onChange={props.name} value={props.val}/>

		</div>
	)
};

export default form;