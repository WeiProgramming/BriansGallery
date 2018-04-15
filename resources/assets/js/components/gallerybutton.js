import React from 'react';

function GalleryButton(props) {
	return (
		<div className = "button col-md-4" onClick = {() => props.handleBtnClick(props.btntype)}>
			<button>Gallery</button>
		</div>
	);
}

export default GalleryButton;