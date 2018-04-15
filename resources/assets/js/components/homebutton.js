import React from 'react';

function HomeButton(props) {
	return (
		<div className = "button col-md-4" onClick = {() => props.handleBtnClick(props.btntype)}>
			<button >Home</button>
		</div>
	);
}

export default HomeButton;