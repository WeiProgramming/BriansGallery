import React,{Component} from 'react';
// import GalleryItem from './galleryitem';
import Gallery from 'react-grid-gallery';
import ContactScreen from './contactscreen';
import HomeScreen from './homescreen';

export default class GalleryList extends Component {
	//will be using a component instead to generate our sgalleryitems
	//this maintains a state of what should be redered on the screen
	constructor(props){
		super(props);
		this.state = {};
		// this.images; 
	}

	componentWillReceiveProps(nextProps){
		this.setState({selectedScreen:nextProps.selectedScreen});
		// this.images = nextProps.images.map((image)=>{
		// 	return <GalleryItem key= {image.id} pic = {image}/>;
		// });
	};


	changeScreen(selectedscreen) {
		if(this.state.selectedScreen === "home"){
			return (
				<div>
					<HomeScreen/>;
				</div>
			);
		}
		else if(this.state.selectedScreen === "gallery"){
			return (
				<div className ="screen slide">
					<h1>Gallery</h1>
					<hr className="style-seven"/>
					<Gallery images = {this.props.images}/>
				</div>
			)
		}
		else if(this.state.selectedScreen === "contact"){
			return (
				<div>
					<ContactScreen handleClickScreen = {this.handleClickScreen} />
				</div>
			);
		}
	}

	render(){
		return (
			<div className="padding">
				{this.changeScreen(this.state.selectedScreen)}
			</div>
		)
	}
}