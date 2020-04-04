// JavaScript Document
import React from 'react';

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
				//let script = document.createElement('script');
		//script.src = `http://www.recipepuppy.com/api/?callback=easyToDo`;
		//document.body.append(script);
		
	fetch('https://joshbloom.github.io/dws1/data/hikersguide.json')
		.then(results =>{
		return results.json();
	}).then(data =>{
		let mList = data.results.map((use)=>{
			return(
				  <li key={this.props.id} style={styles.list}>
				<span key={use.results}>
				/*<img src={use.results.thumbnail}</img><br /><br />
				<h3>{use. results.title}</h3><br />
				<p><b>Ingredients:</b> {use.results.ingredients}</p><br/>*/
				<p><b>Click for </b><a href='{use.posts.moreLink}'>recipe</a></p><br /><br />
				</span>
				</li>
			)
		})
		this.setState({message:mList});
	})
}
	 render() { 
  return (
		<div>{this.state.message}</div>			
  	);
  }
}

export default Main