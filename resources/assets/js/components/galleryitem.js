import React from 'react';

function GalleryItem(props) {
	return (
		<div className = "col-md-4">
			<img src = {props.pic} className = "img-responsive"/> 
		</div>
	);
}

export default GalleryItem;