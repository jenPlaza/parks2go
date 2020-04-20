// JavaScript Document
import React from 'react';
import StateActivities from '../pages/stateActivities';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

//Smart Component
class StateParks extends React.Component {
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
	 
	//state= x;

	// SB: This is how you would access the state code passed in via route params
	// console.log(this.props.match.params.stateCode)
	 
	fetch('https://developer.nps.gov/api/v1/parks?statecode=FL&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq')
		.then(results =>{
		return results.json();
	}).then(data =>{
		
		let pList = data.data.map((use)=>{
			return(
				
			  <li key={this.props.id}>
				<span key={use.results}>  
     <Typography variant="body" align="left">
      	<Link color="inherit" href="/">
		<img src={use.images[0].url} alt={use.images[0].altText} width="350" height="250"/><br />
		{use.fullName}
</Link>{' '}
</Typography>
				</span>
				</li>
			)
		})
		
		this.setState({StateParks:pList});
	})
}
	 render() { 
  return (
  <Grid container style={styles.container}>
	  <Grid item xs={12} style={styles.links}>
	  <h1> State National Park</h1>
	   </Grid>
	    <Grid item xs={12} md={3}style={styles.links}>
	  	<StateActivities />
	   </Grid>
	  
	  <Grid item xs={12} md={1}style={styles.links}>
	  	<Link />
	   </Grid>
	  
	  {this.state.StateParks}		
	  </Grid>
  );
 }
}
export default StateParks

const styles ={
	container:{
		marginTop:'1%',
		backgroundColor:'#313638',
		border:'1px solid red',
		padding:'1%',
		color:'white',
	},
	links:{
		height:'auto',
	},
	parks:{
		textAlign:'center',
		border:'1px solid blue',
	}
}

