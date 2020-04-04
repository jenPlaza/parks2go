// JavaScript Document
import React from 'react';
import Link from '@material-ui/core/Link';

//Smart Component
class Main extends React.Component {
	//declaring state and new object
	state ={
		recipeListing: []
	}

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

//fetch Api data and map json results in a list format
	fetchData(){

	fetch('api')
		.then(results =>{
		return results.json();
	}).then(data =>{
		
		let mList = data.results.map((use)=>{
			return(
				<li key={this.props.id}>
				<span key={use.results}>
				<img src={use.thumbnail} alt={use.title} />
				<h2>{use.title}</h2>
				<p>Ingredients: {use.ingredients}</p>
				<Link href='{use.href}'>{use.href}</Link><br /><br /><br />
				</span>
				</li>
			)
		})
		this.setState({main:mList});
	})
}
	 render() { 
  return (
		<div>{this.state.main}</div>			
  	);
  }
}

export default Main