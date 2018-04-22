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
		this.state = {
			images:[],
			imagesPerPage:12,
			currentPage:1,
			numberOfPages:[],
			selectedScreen:""
		};
		this.handleClick = this.handleClick.bind(this);
		// this.images; 
	}

	componentWillReceiveProps(nextProps){
		this.setState({selectedScreen:nextProps.selectedScreen,images:nextProps.images});
		// this.images = nextProps.images.map((image)=>{
		// 	return <GalleryItem key= {image.id} pic = {image}/>;
		// });
	};

	handleClick(e){
		this.setState({
			currentPage:Number(e.target.id)
		});
		e.preventDefault();
	}


	changeScreen(selectedscreen) {

		const {images,currentPage,imagesPerPage} = this.state;
		console.log(currentPage);

		const indexOfLastImage = currentPage*imagesPerPage;
		const indexOfFirstImage = indexOfLastImage - imagesPerPage;
		const currentImages = images.slice(indexOfFirstImage,indexOfLastImage);
		//logic for page numbers
		const pageNumbers = [1,2,3,4,5,6,7,8,9,10];
		// for(let i = 1; i <= Math.ceil(images.length/imagesPerPage);i++){
		// 	return pageNumbers.push(i);
		// };

		const renderPageNumbers = pageNumbers.map((number)=>{
			return (
				<button
					className = "btn btn-primary"
					style = {{"fontFamily":"serif"}}
					key = {number}
					id = {number}
					onClick={this.handleClick}>
					{number}
				</button>
			);
		});


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
					<div id = "image-container">
						<Gallery images = {currentImages}/>
					</div>
					<div id = "page-numbers">
					{renderPageNumbers}
					</div>
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