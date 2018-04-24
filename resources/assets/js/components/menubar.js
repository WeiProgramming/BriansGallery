import React,{Component} from "react";
import HomeButton from './homebutton';
import GalleryButton from './gallerybutton.js';
import ContactButton from './contactbutton.js';
import GalleryList from './gallerylist';
import Title from './title';

//menu will hold the state of what button is pressed
export default class MenuBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedScreen:"home",
			quoteSelected:1,
		};
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}

	handleBtnClick(selectedScreen){
		//the state is the seleted of what the user pressed
		if(selectedScreen === "home"){
			this.setState({selectedScreen:selectedScreen,
				quoteSelected:1
			});
		}
		else if(selectedScreen === "gallery"){
			this.setState({selectedScreen:selectedScreen,
				quoteSelected:0
			});			
		}
		else {
			this.setState({selectedScreen:selectedScreen,
				quoteSelected:2
			});
		}
	}

	render(){
		return (
			<div>
				<div className = "heading">
					<Title quoteSelected = {this.state.quoteSelected}/>
                	<hr />
					<div className = "text-center">
						<div className = "row">
							<HomeButton handleQuote = {this.handleQuote} handleBtnClick = {this.handleBtnClick} btntype = "home" key="home"/>
							<GalleryButton handleQuote = {this.handleQuote} handleBtnClick = {this.handleBtnClick} btntype = "gallery" key="gellery"/>
							<ContactButton handleQuote = {this.handleQuote} handleBtnClick = {this.handleBtnClick} btntype = "contact" key="contact"/>
						</div>
					</div>
					<hr/>
				</div>
                <GalleryList selectedScreen = {this.state.selectedScreen} images = {this.props.images}/>
			</div>
		);
	};
}