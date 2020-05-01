// JavaScript Document
import React from 'react';
import{ BrowserRouter as Router }from 'react-router-dom'
import ParkGridStateParks from '../components/grids/parkGridStateParks';

//Material UI
import {withStyles} from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

const useStyles = {
	containerSA:{
		justifyContent:'space-around',
		padding:'5%',
	},
	li:{
		color:'grey',
		textDecoration:'none',
		listStyleType:'none',
	},
	activities:{
		columns: '1 auto',
		marginTop:'-8%',
	},
	h1:{
		textAlign:'center',
	},
};

//console.log(window.location.pathname);
 let sCode = window.location.pathname;
 let newSC = sCode.split('/stateActivities/');
 newSC.shift();

const targetId = newSC;
const endpoint = `statecode=${targetId}`;

//Smart Component
class StateActivities extends React.Component {
	//declaring state and new object
	state ={
		activityListing:[],
	} 

//calling fetchData function
	componentDidMount(){
		this.fetchActivities();
}

filterByActivity(current_value, i, activityId){
	for(let i=0; i< current_value.activities.length;i++ ) {
				let activity = current_value.activities[i];
				console.log(activity);
				//if(activity.id ==='7CE6E935-F839-4FEC-A63E-052B1DEF39D2')
				//if(activity.id === `${activityId}`)
					return true;
			}
			//console.log(current_value);
		return false;
}

activityClick(event) {
	window.onclick= event => {
		console.log(event.target);
		
		//const activityId = '7CE6E935-F839-4FEC-A63E-052B1DEF39D2';
		const activityId = event.target.id;
		window.location.assign(`http://localhost:3000/stateParks/${targetId}/${activityId}`);
	};
}

//fetching API
fetchActivities(props){
fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}
			 ).then(data =>{
		let filteredArray = data.data.filter(this.filterByActivity);
		
		let mList = filteredArray.map((use, i)=>{
			const  {classes}  = this.props;
			return(
				<Link key={i}>
				{use.activities.map(activity =>{
					return(
					<li key={activity.id} id={activity.id} style={styles.li} onClick={this.activityClick}>{activity.name}</li>	
						)})}
				</Link>
			)
		})
		this.setState({StateActivities:mList});
	})
}
	 render(props) { 
		const  {classes}  = this.props; 
  return (
<Router>
<Grid container>
	  	  <Grid item xs={12}>
	  		<h1 style={styles.h1}>{targetId} State National Parks</h1>
	  	</Grid> 
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
//export default withStyles(useStyles)(StateActivities);

const styles ={
	containerSA:{
		justifyContent:'space-around',
		padding:'5%',
	},
	li:{
		color:'grey',
		textDecoration:'none',
		listStyleType:'none',
	},
	activities:{
		columns: '1 auto',
		marginTop:'-8%',
	},
	h1:{
		textAlign:'center',
	},
}

