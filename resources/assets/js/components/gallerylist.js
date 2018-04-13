import React from 'react';
import GalleryItem from './GalleryItem';
import Gallery from 'react-grid-gallery';

function GalleryList(props){
	//pics return an array of arrays link
	// const pics = props.pictures.map((picture) => {
	// 	return <div className ="col-md-4"> <GalleryItem pic = {picture}/> </div>
	// });

	return (
		<Gallery images = {props.pictures}/>
	);
}

export default GalleryList;