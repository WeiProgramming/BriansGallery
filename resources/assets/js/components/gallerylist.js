import React,{Component} from 'react';
import GalleryItem from './GalleryItem';
import Gallery from 'react-grid-gallery';
import ContactScreen from './contactscreen';

export default class GalleryList extends Component {
	//will be using a component instead to generate our sgalleryitems
	//this maintains a state of what should be redered on the screen
	constructor(props){
		super(props);
		this.state = {selectedScreen: "home"}
	}

	componentWillReceiveProps(nextProps){
		this.setState({selectedScreen:nextProps.selectedScreen});
	};


	changeScreen(selectedscreen) {
		// console.log(this.state.selectedScreen);
		if(this.state.selectedScreen === "home"){
			return <Gallery images = {this.props.pictures}/>;
		}
		else {
			return <ContactScreen handleClickScreen = {this.handleClickScreen} />
		}
	}

	render(){
		return (
			<div>
				{this.changeScreen(this.state.selectedScreen)}
			</div>
		)
	}
}