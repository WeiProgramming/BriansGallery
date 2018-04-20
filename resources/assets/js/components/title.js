import React,{Component} from 'react';

const url = "https://quotes.stormconsultancy.co.uk/random.json";
export default class Title extends Component {
	constructor(props){
		super(props);
		this.state = {quote:""};
		fetch(url)
		.then((response) => response.json(response))
		.then((data)=>{this.setState({quote: data.quote})});
	}

	componentDidMount(){
		this.tickID = setInterval(()=>this.ticker(),5000);
	}

	componentWillUnmount(){
		clearInterval(this.tickID);
	}

	ticker(){
		fetch(url)
		.then((response) => response.json(response))
		.then((data)=>{this.setState({quote: data.quote})});
	}

	render(){
		return (
			<div className = "title text-center">
				<h1>Stained Glass</h1>
				<h4>Hand-Drawn By: Brian Nguyen</h4>
				<p>{this.state.quote}</p>
			</div>
		);
	}
}