import React, {Component} from 'react'
import axios from 'axios'
import ActorsList from '../../components/Actor/ActorsList'

class Actors extends Component{
	constructor(props){
		super(props)
		this.state={
			actors:[]
		}
		this.fetchdata = this.fetchdata.bind(this);
	}
	fetchdata(){
		axios.get(`http://localhost:3001/api/v1/actors`)
		.then(res =>{
			console.log(res)
			this.setState({
				actors: res.data
			})
		})
	}
	componentDidMount(){
		axios.get(`http://localhost:3001/api/v1/actors`)
		.then(res =>{
			console.log(res)
			this.setState({
				actors: res.data
			})
		})
	}
  render(){
  	return(
  		<ActorsList actors = {this.state.actors} 
  		fetchdata = {this.fetchdata}/>
  		)
  }
}

export default Actors