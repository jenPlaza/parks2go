// JavaScript Document
import React from 'react';

//Material UI
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";

 let sCode = window.location.pathname;
 let newSC = sCode.split('/stateActivities/');
 newSC.shift();

const targetId = newSC;
const endpoint = `stateCode=${targetId}&limit=2`;


//Smart Component
class ParkGridStateParks extends React.Component {
	//declaring state and new object
	state ={
		parkListing: [],
	}

parkClick(event) {
	window.onclick= event => {
		//console.log(event.target);
		//console.log(event.target.id);
		
		var parkId = event.target.id;
		window.location.assign(`http://localhost:3000/park/${parkId}`);
	};
} 

//calling fetchData function
	componentDidMount(){
	this.fetchParks();
}

//fetching API
 fetchParks(){
	fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}).then(data =>{

		let mList = data.data.map((use, i)=>{
			return(
				<Box key={i}>
				<img id={use.parkCode} src={use.images[0].url} alt={use.images[0].altText} style={styles.image} onClick={this.parkClick}/>
				<h2 style={styles.h2}><b>{use.name}</b></h2>
				<h4 style={styles.h4}>{use.addresses[0].city}, {use.addresses[0].stateCode}</h4>
				</Box>
			)
		})
		this.setState({ParkGridStateParks:mList});
	})
} 
	 render() { 
  return (
  	<div> 
	  <Grid container >
	  	 <Grid item xs={12}>
	  		<h1 style={styles.h1}>{targetId} State National Parks</h1>
	  	</Grid> 
	  	<Grid item xs={12}>
	  				<Box />
	  			</Grid> 
	 		</Grid>
	  
	  {this.state.ParkGridStateParks}		
	</div>
  );
 }
}
export default ParkGridStateParks
const styles ={
	image:{
		width:'100%',
	},
	h1:{
		textAlign:'center',
	},
	h2:{
		marginTop:'-10%',
		color:'white',
	},
	h4:{
		marginTop:'-3%',
		color:'white',
	},
}

