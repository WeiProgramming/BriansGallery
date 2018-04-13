import React from 'react';

function GalleryItem(props) {
	return (
				<div className = "thumbnail"> 
					<img src = {props.pic} width="150px" height= "90px"/>
				</div>
	);
}

export default GalleryItem;