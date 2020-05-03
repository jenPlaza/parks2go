// JavaScript Document
import React from 'react';
import Modal from '../components/modal/modal';

//Material UI
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

//Images & Icons
import imgUrl from '../images/parkAbout.jpg';

const useStyles = makeStyles(theme => ({
container:{
		backgroundImage: 'url(' + imgUrl + ')',	
		backgroundColor:'rgba(24, 8, 0, 1)',
		padding:'6%',
	  color: theme.palette.secondary.contrastText,
	},
contact:{
	  padding:'2%',
	   color: theme.palette.primary.light,
		textAlign:'center',
		height:'150px',
	[theme.breakpoints.up('md')]: {
    	marginBottom: '3%',
	},
	},
address:{
	 padding:'2%',
	  color: theme.palette.primary.light,
		textAlign:'center',
		height:'150px',
	},
sendUs:{
		padding:'2%',
		textAlign:'center',
		height:'150px',
	},
h1:{
		fontSize:'larger',
    color: theme.palette.secondary.contrastText,
    float: 'left',
    margin: '0',
    padding: '0',
},
h3:{
    color: theme.palette.secondary.contrastText,
    float: 'left',
    margin: '0',
    padding: '0',
},
}));

export default function Index() {
 const classes = useStyles();
  return (
		<Grid container>
				<Grid item xs={12} className={classes.container} >
					<section>
	  					<h1>About Us</h1>
	  					<p>
Parks2Go is a free interactive guide to National State Parks around the country, created by Jen Plaza. Parks2Go originally began as a React student assignment, it now fits right into your mobile, tablet, or desktop device via GH pages; adopting all of its cutting-edge features and presenting them in a sleek and intuitive interface.<br /><br />

Parks2Go worked hard to build an app specifically focused on finding State National Parks. The app was designed to pull information on locations, descriptions, fees, activitities, topics, images, and weather, so you don't have to. <br /><br />

Whether you are in the mood for biking, site seeing, or swimming, you can filter the parks to eactly what you want to do. Parks2Gos main functionality revolves around an interactive map, that allows you to click on a desired state, to plan your next adventure. All images are clickable and will also direct you to that specific park.<br /><br />

Parks2Go is a very simple app to work, which is one of the reasons why I am proud to offer this service to you.</p>
	  				</section>
				</Grid>
	  <Grid item xs={12} md={3} className={classes.contact}>
			<h2>1-512-394-9384</h2>
	  		<p>Monday - Friday<br />
	  		8:00am -5:30pm CT
	  		</p>	
	  </Grid>
	  <Grid item xs={12} md={7} className={classes.address}>
	 
	   							<h3>Parks2Go, Inc </h3>
	  								<address>
	  								7256 Arugula Parkway, ste 101<br />
	  								The Woodlands, TX 77380<br />
	  								1-512-394-9384
	  								</address>
	  	</Grid>
	  <Grid item xs={12} md={2} className={classes.sendUs}>
	  <Modal />
	  </Grid>
</Grid> 
    );
}


