import React from 'react';
import GalleryItem from './GalleryItem'

function GalleryList(props){
	//pics return an array of arrays link
	const pics = props.pictures.map((picture) => {
		return <GalleryItem pic = {picture}/>
	});

	return (
		<div class = "row">
			{pics}
		</div>
	);
}

export default GalleryList;