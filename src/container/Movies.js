import React,{Component} from "react"
import axios from 'axios'
import Moviescss from "./Moviescss.css"
import Movie_list from "../components/Movie_list"
import Spinner from '../common/Spinner'
import MovieFilters from '../components/MovieFilters'

class Movies extends Component{
	constructor(props){
		super(props)
	this.state={
		movies_list:[],
		search_value:'',
		message: '',
		isloading: false,
		filter:{
			is4: false,
			is3: false,
			is2: false
		}
			
	}
	this.handleDelete = this.handleDelete.bind(this)	
	this.searchmovie = this.searchmovie.bind(this)
	this.handleChange = this.handleChange.bind(this)
	this.filter = this.filter.bind(this)
	}
	searchmovie(e){
	
		var search_list = this.state.movies_list.filter(
			(movie)=> (
				movie.name == this.state.search_value.search
			));
		this.setState({
			movies_list : search_list
		});
		if(search_list.length > 0){
			console.log('serched')
		}else{
			console.log('Not found')
			this.setState({
				message: 'sorry!!!! Result Not Found'
			})
		}
	}
	handleChange(e){
		const {name,value} = e.target
		this.setState(this.state.search_value={
			[name]: value
		})
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
		document.title = "vaibhav app";
		this.setState({isloading: true})
		axios.get(`http://localhost:3001/api/v1/movies.json`)
		.then(res => {
			console.log(res)
			this.setState({
				movies_list:res.data,
				isloading: false})
		} )

	}

	filter(criteria){
			var search_list;
      let name= criteria.target.name
      let value =criteria.target.checked
      console.log(name)
      if(value == true){
    		var search_list = this.state.movies_list.filter(
			(movie)=> (
				movie.rating >= name
			));
		this.setState({
			movies_list : search_list
		});  	
      }else{
      	this.componentDidMount()
      }
		
	}


	render(){
		let action;
		if (this.state.isloading == false){
			action = <Movie_list list = {this.state.movies_list} 
								handleDelete = {this.handleDelete}/>
		}else{
			action = < Spinner />
		}
		var divstyle = {
			float:"right"
		}
		return(
			<div>
				<div class="search-container">
			    <form>
			      <input type="text" placeholder="Search.." name="search"
			      onChange = {this.handleChange} />
			      <input type="button" className="btn btn-primary" name="searchMovie"
			      value="SearchMovie"
			      onClick={this.searchmovie}/>
			    </form>
		    </div>
		     <h4>{this.state.message}</h4>
		    <div className="col-sm-10" style={divstyle}>
				   	{action}
				</div>
				<div className="col-sm-2">
		     	<MovieFilters filter={this.state.filter}
		     	MovieFilter = {this.filter}/>
		     </div>
			</div>
		)
	}
}
export default Movies
