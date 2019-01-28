import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ActorsList extends Component{
	constructor(props){
		super(props)
		this.handleDelete = this.handleDelete.bind(this)
	}
	handleDelete(e){
		var id = e.target.id
		axios.delete(`http://localhost:3001/api/v1/actors/${id}`)
		.then(res=>{
			console.log('successfully Deletd')
		});
 		this.props.fetchdata();
	}
	render(){

  	var id=0;
  	return(
  		<div>
			 <Link to={'actors/create'}>Add Actor</Link>
				<table className="table table-striped">
					<thead>
		  			<tr>
					    <th scope="col">ID</th>
					    <th scope="col">Actor Name</th>
					    <th scope="col">Number of Movies</th>
					  </tr>
					</thead>
					<tbody>
					{this.props.actors.map((actor) =>
						<tr key={actor.id}>
					    <td>{++id}</td>
					    <td><Link to={`actors/${actor.id}/show`}>{actor.actorname}</Link></td>
					    <td>1</td>
					    <td><Link to={`actors/${actor.id}/edit`}>Edit</Link></td>
					    <td><Link to={`/actors`}><input type="button" name="Delete" id={actor.id}
					     className="btn btn-danger"
					     onClick={this.handleDelete}
					     value="Delete" /></Link>
					    </td>
					  </tr>
						)}
					</tbody>
				</table>
			</div>
  	)
  }
}
export default ActorsList