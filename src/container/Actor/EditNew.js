import React, {Component} from 'react'
import axios from 'axios'
import ActorForm from '../../components/Actor/ActorForm'

class EditNew extends  Component{
	constructor(props){
		super(props)
		this.state={
			actor: {
				actorname: '',
				actordob: '',
				description:''
			},
			request: 'new'
		}
		this.submitHandler = this.submitHandler.bind(this)
		this.changeHandler = this.changeHandler.bind(this)
	}
	submitHandler(){
		const actor ={
			actorname: this.state.actorname,
			actordob: this.state.actordob,
			description: this.state.description
		}
		console.log(this.state.actorname)
		if(this.state.request === 'new'){
			axios.post(`http://localhost:3001/api/v1/actors`,{actor})
			.then(res=>{
				console.log('sucessflly saved')
			})
		}else if(this.state.request === 'edit'){
			axios.put(`http://localhost:3001/api/v1/actors/${this.props.match.params.id}`,
				{actor})
			.then(res=>{
				console.log('updated successully')
			})
		}
	}
	changeHandler(e){
		const {name,value} = e.target
		this.setState(this.state.actor={
			[name]: value
		})
	}
	componentDidMount(){
		var id = this.props.match.params.id
		if(id){
			axios.get(`http://localhost:3001/api/v1/actors/${id}`)
			.then(res =>{
				console.log(res.data)
				this.setState({
					actor: res.data,
					request: 'edit'
				})
			})
		}else{
			console.log('not id')
		}
	}
	render(){
		return(
			     <ActorForm actor = {this.state.actor}
			     changeHandler = {this.changeHandler}
			     submitHandler = {this.submitHandler}
			     />
			)
	}
}

export default EditNew
