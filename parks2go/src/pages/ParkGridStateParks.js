// JavaScript Document
import React from 'react';

//Images & Icons
import image from '../images/placeholder.jpg'

//Material UI
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

const id ='FL';
const endpoint = `stateCode=${id}&limit=2`;

//Smart Component
class ParkGridStateParks extends React.Component {
	//declaring state and new object
	state ={
		parkListing: [],
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

      		<Link color="inherit" href="/">
				<img src={use.images[1].url} alt={use.images[1].altText} style={{width: '100%'}}/>
			</Link>

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
	  		<h1 style={styles.h1}>{id} State National Parks</h1>
	  	</Grid> 
	  	<Grid item xs={12}>
	  				<Link />
	  				<Link />
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
}

