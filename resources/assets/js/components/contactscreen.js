import React,{Component} from 'react';

export default class ContactScreen extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			subject: "",
			body: "",
			transform: this.props.screenTransform
		};
	}

	componentWillReceiveProps(nextProps){
		this.setState({transform:nextProps.screenTransform});
		console.log(nextProps.screenTransform + " prop receive");
	}

	render(){
		return (
			<div className = "screen slide">
				<h1>Contact Me</h1>
				<hr className="style-seven"/>
				<div className ="row">

				<div className = "col-md-4 text-center" style = {{"overflow":"auto"}}>
					 <img className="img-responsive" style={{"height":"275px"}}
					 src = "https://images.unsplash.com/photo-1458240598330-ccda17524e5c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05e58502ded37d19bbf912722b26d21b&auto=format&fit=crop&w=934&q=80"/>
					 <div className = "row" style={{"marginTop":"5%"}}>
					 	<div className = "col-md-3">
					 		<i className="fab fa-facebook-square"></i>
					 	</div>
					 	<div className = "col-md-3">
					 		<i className="fab fa-instagram"></i>
					 	</div>
					 	<div className = "col-md-3">
					 		<i className="fab fa-tumblr"></i>
					 	</div>
					 	<div className ="col-md-3">
					 		<i className="fab fa-twitter-square"></i>
					 	</div>
					 </div>
				</div>

				<div className ="contact text-center col-md-8">
					<form>
						<div className = "form-group">
						<label htmlFor="email">Email: </label>
							<input className = "form-control" type = "text" name = "email" 
							autoComplete='email'
							value = {this.state.email} 
							onChange = {(event)=>this.setState({email:event.target.value})}/>
						</div>

						<div className = "form-group">
						<label htmlFor="subject">Subject: </label>
							<input className = "form-control" type ="text" name="subject"
							value = {this.state.subject} onChange = {(event)=>this.setState({subject:event.target.value})}/>
						</div>

						<div className = "form-group">
						<label htmlFor="body">Message: </label>
							<textarea className = "form-control" name="body" value = {this.state.body} onChange = {(event)=>this.setState({body:event.target.value})}>
							</textarea>
						</div>
						<div className = "form-group">
							<input className = "btn btn-primary btn-block form-control" type="submit" value="Submit"/>
						</div>
					</form>
				</div>

				</div>

			</div>
		);	
	}
}