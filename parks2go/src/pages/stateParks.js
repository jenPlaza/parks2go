// JavaScript Document
import React from 'react';
import ParkGridStateParks from '../pages/ParkGridStateParks';
import Map from './Map';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

//console.log(window.location.pathname);
 let sCode = window.location.pathname;
 let newSC = sCode.split('/StateParks/');
 newSC.shift();

const targetId = newSC;
const endpoint = `stateCode=${targetId}`;

//Smart Component
class StateParks extends React.Component {
	//declaring state and new object
	state ={
		activityListing:[],
	}

//calling fetchData function
	componentDidMount(){
		this.fetchActivities();
}

//fetching API
fetchActivities(){
fetch(`https://developer.nps.gov/api/v1/activities?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}
			 ).then(data =>{
		let mList = data.data.map((use)=>{
			return(
				<Link>
					<div>{use.name}</div>
				</Link>
			)
		})
		this.setState({StateParks:mList});
	})
}
	 render() { 
  return (
<Grid container>
	<Grid item xs={7}>
	  	<ParkGridStateParks />
	</Grid>
	<Grid item xs={5}>

	  	<Grid container style={styles.containerSA}>
	  	 <Grid item xs={12}>
	  		
	  	</Grid> 
	  	<Grid item xs={12} >
	  
	  		<div style={styles.activities}>
	  <h3> Filter parks by activity</h3>
	 			{this.state.StateParks}
	   		</div>
	  	</Grid> 
	 </Grid>
	</Grid> 
</Grid> 
	
  );
 }
}
export default StateParks

const styles ={
	containerSA:{
		justifyContent:'center',
	},
	item:{
		textAlign:'center',
	},
	activities:{
		columns: '1 auto',
		marginTop:'15%',
		marginLeft:'30%',
	},
}

