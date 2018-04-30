import React,{Component} from 'react';
import xxios from 'axios';

const questionFormURL = "http://localhost:8000/api/send";

export default class ContactScreen extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			subject: "",
			body: "",
			conditionMessage: "",
			transform: this.props.screenTransform
		};
	}

	componentWillReceiveProps(nextProps){
		this.setState({transform:nextProps.screenTransform});
		console.log(nextProps.screenTransform + " prop receive");
	}

	handleQuestion(e){
		axios.post(questionFormURL,{
			email:"test@gmail.com",
			subject:"hey there",
			body:"money"
		}).then((response)=> {
			this.setState({conditionMessage:<p className ="alert alert-success">{response.data.message}</p>});
		}).catch((error) => {
			this.setState({conditionMessage:<p className ="alert alert-danger">{error}</p>});
		});

		e.preventDefault();
	}

	render(){
		return (
			<div className = "screen slide">
				<h1>Contact Me</h1>
				<hr className="style-seven"/>
								{this.state.conditionMessage}
				<div className ="row">
				<div className = "col-md-4 text-center" style = {{"overflow":"auto"}}>
					 <div> 
						<img src ="images/corgs.jpg" 
						className = "img-thumbnail"/>
					</div>
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
					<form >
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
							<input className = "btn btn-primary btn-block form-control" onClick = {(e) => {this.handleQuestion(e)}} type="submit" value="Submit"/>
						</div>
					</form>
				</div>

				</div>

			</div>
		);	
	}
}