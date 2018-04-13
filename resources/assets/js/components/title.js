import React from 'react';

function Title(props){
	return (
		<div className = "text-center">
			<h1>Brian's Gallery</h1>
			<p>{props.quote}</p>
		</div>
	);
}

export default Title;