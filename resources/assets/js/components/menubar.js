import React,{Component} from "react";
import HomeButton from './homebutton';
import GalleryButton from './gallerybutton.js';
import ContactButton from './contactbutton.js';
import GalleryList from './gallerylist';

//menu will hold the state of what button is pressed
export default class MenuBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedScreen:"",
		};
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}

	handleBtnClick(selectedScreen){
		//the state is the seleted of what the user pressed
		this.setState({selectedScreen});
	}

	render(){
		return (
			<div>
				<div className = "text-center">
					<div className = "row">
						<HomeButton handleBtnClick = {this.handleBtnClick} btntype = "home" key="home"/>
						<GalleryButton handleBtnClick = {this.handleBtnClick} btntype = "gallery" key="gellery"/>
						<ContactButton handleBtnClick = {this.handleBtnClick} btntype = "contact" key="contact"/>

					</div>
				</div>
				    <hr />
				    						{this.state.selectedScreen}
                <GalleryList selectedScreen = {this.state.selectedScreen} pictures = {this.props.images}/>
			</div>
		);
	};
}