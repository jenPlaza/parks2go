// JavaScript Document
import React from 'react';
import Link from '@material-ui/core/Link';



//Smart Component
class Main extends React.Component {
	//declaring state and new object
	state ={
		parkListing: []
	}

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

//fetch Api data and map json results in a list format
	fetchData(){

	fetch('https://developer.nps.gov/api/v1/parks?limit=5&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq')
		.then(results =>{
		return results.json();
	}).then(data =>{
		
		let mList = data.data.map((use)=>{
			return(
				<li key={this.props.id}>
				<span key={use.results}>
				<img src={use.images[0].url} alt={use.images[0].altText} width="400" height="200"/>
				<h2>{use.name}</h2>
				<h3>{use.addresses[0].city}, {use.addresses[0].stateCode}</h3>
				<p><b>Park Details</b><br />
					    Cost:{use.entranceFees[0].cost},<br />
					    Description: {use.entranceFees[0].description},<br />
					    Title: {use.entranceFees[0].title}</p>
				<p><b>Park Description</b><br /> {use.description}</p>
				<p><b>Park Activities</b>
					{use.activities.map(item =>{
						return(
							<div>{item.name}</div>	
								)
							})
						}
					</p>
				<p><b>Park Info</b><br /> {use.directionsInfo}</p>
				<p><b>For More Directions</b><br />
				<Link href='{use.directionsUrl}'>{use.directionsUrl}</Link><br /><br /><br /><br /><br /></p>
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