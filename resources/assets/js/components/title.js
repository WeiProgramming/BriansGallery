import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const quotes = [<h5 className = "fade">"Don't think about making art, just get it done. Let everyone else decide if it's good or bad, whether they love it or hate it. While they are deciding, make even more art."" Andy Warhol</h5>,
<h6 className = "fade">"You can be the ripest, juiciest peach in the world, and there's still going to be somebody who hates peaches." Dita Von Teese</h6>,
<p className = "fade">“Be soft. Do not let the world make you hard. Do not let pain make you hate. Do not let bitterness steal your sweetness. Take pride that even though the rest of the world may disagree, you still believe it to be a beautiful place.”
Iain Thomas
</p>];

export default class Title extends Component {
	constructor(props){
		super(props);
		this.state = {quote:<p>{quotes[1]}</p>};
	}
	componentWillReceiveProps(nextProps){
		this.setState({quote: quotes[nextProps.quoteSelected]});
	}

	// componentDidMount(){
	// 	this.tickID = setInterval(()=>this.ticker(),5000);
	// }

	// componentWillUnmount(){
	// 	clearInterval(this.tickID);
	// }

	// ticker(){
	// 	const randomNumber = Math.round(Math.random());
	// 	this.setState({quote:quotes[randomNumber]});
	// }

	render(){
		return (
			<div className = "title text-center">
				<h1>Stained Glass</h1>
				<h4>Hand-Drawn By: Brian Nguyen</h4>
				{this.state.quote}
			</div>
		);
	}
}