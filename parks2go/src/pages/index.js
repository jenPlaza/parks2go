// JavaScript Document
import React from 'react';
import ParkGridHome from '../components/grids/parkGridHome';
import States from '../components/USA_states/states';
import Map from '../components/map/map';


//Material UI
import {makeStyles} from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	container:{
		flexGrow: '1',
		overflow:'hidden',
		textAlign:'left',
	  marginBottom:'0%',
		justifyContent: 'space-around',
	},
	rightContainer:{
		padding:'5%',
		marginTop:'-5%',
	},
	map:{
		textAlign:'center',
	},
}));

	export default function Index() {
 const classes = useStyles();

	 const linkClick = (event) => {
	//linkClick(event) {
	window.onclick= event => {
	 //console.log(event.target);
	
	  var targetId = event.target.id;
	  window.location.assign(`http://localhost:3000/stateActivities/${targetId}`);
	};
 };
    return(
    <div className={classes.container}>
      <Grid container >
	  		<Grid item xs={12} md={4}>
        		<ParkGridHome />
       		</Grid>
	  		<Grid item xs={12} md={8} className={classes.rightContainer}>
	  			<Grid container>
	  				<Grid item xs={12} className={classes.map}>
	  					<Map />
	  				</Grid>
      				<Grid item xs={12} >
	  					<States />
            		</Grid> 
        		</Grid>
	  		</Grid>
      	</Grid>
    </div>
  	);
  }
