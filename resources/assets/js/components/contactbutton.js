import React from 'react';

function ContactButton(props) {
	return (
		<div className = "button col-md-4" onClick = {() => props.handleBtnClick(props.btntype)}>
			<button >Contact</button>
		</div>
	);
}

export default ContactButton;