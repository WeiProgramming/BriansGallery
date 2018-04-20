import React from 'react';

function GalleryItem(props) {
						console.log(props.pic);
	return (
				<div className = "thumbnail"> 
					<img src = {props.pic.src} width="150px" height= "90px"/>
				</div>
	);
}

export default GalleryItem;