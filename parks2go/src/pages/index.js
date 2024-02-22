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
	marginTop:'-3%',
	},
map:{
	padding:0,
	margin:0,
	marginTop: '-30%',
	textAlign:'center',
	[theme.breakpoints.up('md')]: {
   		 marginTop: '0%',
	},
	[theme.breakpoints.up('lg')]: {
    	marginTop: '10%',
	},
	},
states:{
	marginTop: '-25%',
	marginBottom:'5%',
	[theme.breakpoints.up('md')]: {
    	marginTop: '5%',
	},
	[theme.breakpoints.up('lg')]: {
    	marginTop: '10%',
		marginBottom:'-15%',
	},
	},
h1:{
	marginBottom:'-10%',
	color:theme.palette.secondary.main,
	[theme.breakpoints.up('md')]: {
    	marginTop: '5%',
	},
	[theme.breakpoints.up('lg')]: {
    	marginTop: '0%',
		fontSize:'1.25em',
	},
	},
}));

	export default function Index() {
 const classes = useStyles();
    return(
    <div className={classes.container}>
      <Grid container >
	  		<Grid item xs={12} md={4}>
        		<ParkGridHome />
       		</Grid>
	  		<Grid item xs={12} md={8} className={classes.rightContainer}>
	  			<Grid container>
					<Grid item xs={12} className={classes.h1}>
	  					<h1>A New Adventure Is Waiting For You...</h1>
	  				</Grid>
	  				<Grid item xs={12} className={classes.map}>
	  					<Map />
	  				</Grid>
      				<Grid item xs={12} className={classes.states}>
	  					<States />
            		</Grid> 
        		</Grid>
	  		</Grid>
      	</Grid>
    </div>
  	);
  }
