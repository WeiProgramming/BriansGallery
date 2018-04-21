import React from 'react';

function GalleryItem(props) {
						console.log(props.pic);
	return <img className ="img-thumbnail" src = {props.pic.src}/>;
}

export default GalleryItem;