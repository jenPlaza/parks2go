// JavaScript Document
import React from 'react';
import{ BrowserRouter as Router }from 'react-router-dom'
import ParkGridStateParks from '../components/grids/parkGridStateParks';
import Map from './map';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

//console.log(window.location.pathname);
 let sCode = window.location.pathname;
 let newSC = sCode.split('/stateActivities/');
 newSC.shift();

const targetId = newSC;
const activityName = 'Food';
const endpoint = `stateCode=${targetId}`;

//Smart Component
class StateActivities extends React.Component {
	//declaring state and new object
	state ={
		activityListing:[],
	}

activityClick(event) {
	window.onclick= event => {
		//console.log(event.target);
		console.log(event.target.id);
		console.log(event.target.name);
		
		var activity = event.target.name;
		window.location.assign(`http://localhost:3000/stateParks/${targetId}`);
	};
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
		let mList = data.data.map((use, i)=>{
			return(
				<Link >
					<li key={use.id} name={use.name} id={use.id} style={styles.li} onClick={this.activityClick}>{use.name}</li>
				</Link>
			)
		})
		this.setState({StateActivities:mList});
	})
}
	 render() { 
  return (
<Router>
<Grid container>
		<Grid item xs={7}>
	  		<ParkGridStateParks />
		</Grid>
	  	<Grid item xs={5} style={styles.containerSA}>
	  	  		<div style={styles.activities}>
	  				<h3> Filter parks by activity</h3>
	  				<ul>
	  				<Link />
	  				</ul>
	  				{this.state.StateActivities}
	   			</div>
	  	</Grid> 
</Grid> 
</Router>
  );
 }
}
export default StateActivities

const styles ={
	containerSA:{
		justifyContent:'center',
	},
	li:{
		color:'grey',
		textDecoration:'none',
		listStyleType:'none',
	},
	activities:{
		columns: '1 auto',
		marginTop:'15%',
		marginLeft:'30%',
	},
}

