import React from "react";
import HomeButton from './homebutton';
import GalleryButton from './gallerybutton.js';
import ContactButton from './contactbutton.js';

function MenuBar(props) { 
	const menu = [<HomeButton key="home"/>,<GalleryButton key="gellery"/>,<ContactButton key="contact"/>];

	return (
		<div className = "text-center">
			<div className = "row">
				{menu}
			</div>
		</div>
	);
}

export default MenuBar;