import React, {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
class ShowActor extends Component{
	constructor(props){
		super(props)
		this.state={
			actor: []
		}
	}
	componentDidMount(){
		axios.get(`http://localhost:3001/api/v1/actors/${this.props.match.params.id}`)
		.then(res => {
			console.log(res.data)
			this.setState({
				actor : res.data
			})
		})
	}
	render(){
		return(
			   <div>
					   <br/>
					   <br/>
						<div className="jumbotron col-sm-6" >
					   <h3>{this.state.actor.actorname}</h3>
					    <div class="card">
			  				<div class="card-body">
						    Date Of Birth:<h5>{this.state.actor.actordob}</h5>
						    Description:<h6>{this.state.actor.description}</h6>
		          </div>
		         </div>
					    
					   </div>
					   <Link to={`/actors`}><input type="button" 
					   className="btn btn-primary" name="Back" value="Back" /></Link>
			    </div>

			)
	}
}

export default ShowActor