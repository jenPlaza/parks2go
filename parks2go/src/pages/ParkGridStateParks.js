// JavaScript Document
import React from 'react';

//Material UI
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";

 let sCode = window.location.pathname;
 let newSC = sCode.split('/StateParks/');
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
		window.location.assign(`http://localhost:3000/Park/${parkId}`);
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
				<img id={use.parkCode} src={use.images[1].url} alt={use.images[1].altText} style={{width:'100%'}} onClick={this.parkClick}/>
				<h2 style={styles.h2}>{use.name}</h2>
				<h3 style={styles.h3}>{use.addresses[1].city}, {use.addresses[1].stateCode}</h3>
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
	h1:{
		textAlign:'center',
	},
	h2:{
		marginTop:'-8%',
		color:'white',
	},
	h3:{
		marginTop:'-2%',
		color:'white',
	},
}

