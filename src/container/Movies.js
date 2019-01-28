import React,{Component} from "react"
import axios from 'axios'
import Movie_list from "../components/Movie_list"

class Movies extends Component{
	constructor(props){
		super(props)
	this.state={
		movies_list:[]
	}
	this.handleDelete = this.handleDelete.bind(this)	
	}
	
handleDelete(e){
	console.log('in delete')
	alert('Are you sure?')
	var id = e.target.id
	axios.delete(`http://localhost:3001/api/v1/movies/${id}`)
	.then(res =>
	{
		console.log('successfully Deleted')
	})
		axios.get(`http://localhost:3001/api/v1/movies.json`)
		.then(res => {
			console.log(res)
			this.setState({movies_list:res.data})
		} )

}
	componentDidMount(){
		axios.get(`http://localhost:3001/api/v1/movies.json`)
		.then(res => {
			console.log(res)
			this.setState({movies_list:res.data})
		} )

	}
	render(){
		return(
			<Movie_list list = {this.state.movies_list} 
			handleDelete = {this.handleDelete}/>
		)
	}
}
export default Movies