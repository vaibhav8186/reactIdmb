import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class ActorForm extends Component{
	constructor(props){
		super(props)
	}
		render(){
		return(
			<div className="col-sm-6">
				<form onSubmit={this.props.submitHandler}>
				 	<div className="form-group">
				    <label for="exampleFormControlInput1">Actor Name</label>
				    <input
				     type="text" 
				     name= "actorname"
				     className="form-control" 
				     value = {this.props.actor.actorname}
				     onChange = {this.props.changeHandler}
				    id="exampleFormControlInput1" />
					</div>
				   <label for="exampleFormControlInput1">Date Of Birth:</label>
				  <div className="form-group">
				    <input
				     type="Date" 
				      value = {this.props.actor.actordob}
				      name="actordob"
				      onChange = {this.props.changeHandler}
				      className="form-control"
				     id="exampleFormControlInput1" />
					</div>
				  <div className="form-group">
				    <label for="exampleFormControlTextarea1">Description</label>
				    <textarea
				     className="form-control"
				      value = {this.props.actor.description}
				      name="description"
				      onChange = {this.props.changeHandler}
				     id="exampleFormControlTextarea1" rows="3"/>
				  </div>
				  <div className="form-group">
				  	<Link to={`/actors`}><input type="button" 
				  	className="btn btn-primary"
				  	 onClick={this.props.submitHandler} 
				  	 name="Submit"
				  	  value="Submit"
				  	   />
				  	</Link>  <Link to={`/actors`}><input type="button"
				  	 className="btn btn-primary" name="Back" value="Back"
				  	  /></Link>
				  </div>   
				</form>
			</div>
		)
	}
}
export default ActorForm 