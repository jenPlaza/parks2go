// JavaScript Document
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ParkGridHome from '../pages/ParkGridHome';

//images
//import logo2 from '../../images/ptBtn3.png';

//Material UI
import Grid from "@material-ui/core/Grid";

//styles
const useStyles = makeStyles(theme => ({
  root:{				
		height:'auto',
		flexGrow: 1,
		overflow:'hidden',
		textAlign:'left',
	},
	paper:{
	backgroundColor:'white',
		border:'none',
	},	
	h2:{
		fontSize:'1.25em',
		textAlign:'center',
		marginTop:'-0.5%',
	},
	logo2:{
		width:'75%',
		marginLeft:'-15%',
    [theme.breakpoints.up('lg')]: {
     width:'35%',
    },
	},
	a:{
		color:'grey',
		textDecoration:'none',
	},
	copy:{
		marginBottom:'2%',
	},
	typography:{
		color:theme.palette.secondary.main,
	}
}));

//exporting a class footer
export default function Footer() {
  const classes = useStyles();
	
  return(
    <div className={classes.root}>
      <Grid container style={styles.containerPGH}>
	   <Grid item xs={12} md={6}>
        <ParkGridHome />
        </Grid>
	  
	  <Grid item xs={12} md={5} >
	  <Grid container>
      <Grid item xs={12}  style={styles.box}>
	  <a className={classes.a} href='https://reactjs.org'>Alabama</a><br />
      <a className={classes.a} href='https://reactjs.org'>Alaska</a><br />
      <a className={classes.a} href='https://reactjs.org'>Arizona</a><br />
      <a className={classes.a} href='https://reactjs.org'>Arkansas</a><br />
      <a className={classes.a} href='https://reactjs.org'>California</a><br />
      <a className={classes.a} href='https://reactjs.org'>Colorado</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Conneticut</a><br />
      <a className={classes.a} href='https://reactjs.org'>District of Columbia</a><br />
      <a className={classes.a} href='https://reactjs.org'>Delaware</a><br />
      <a className={classes.a} href='https://reactjs.org'>Florida</a><br />
      <a className={classes.a} href='https://reactjs.org'>Georgia</a><br />
      <a className={classes.a} href='https://reactjs.org'>Hawaii</a><br />
      <a className={classes.a} href='https://reactjs.org'>Idaho</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Illinois</a><br />
      <a className={classes.a} href='https://reactjs.org'>Indiana</a><br />
      <a className={classes.a} href='https://reactjs.org'>Iowa</a><br />
      <a className={classes.a} href='https://reactjs.org'>Kansas</a><br />
      <a className={classes.a} href='https://reactjs.org'>Kentucky</a><br />
      <a className={classes.a} href='https://reactjs.org'>Louisiana</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Maine</a><br />
      <a className={classes.a} href='https://reactjs.org'>Maryland</a><br />
      <a className={classes.a} href='https://reactjs.org'>Massachusetts</a><br />
      <a className={classes.a} href='https://reactjs.org'>Michigan</a><br />
      <a className={classes.a} href='https://reactjs.org'>Minnesota</a><br />
      <a className={classes.a} href='https://reactjs.org'>Mississippi</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Missouri</a><br />
      <a className={classes.a} href='https://reactjs.org'>Montana</a><br />
      <a className={classes.a} href='https://reactjs.org'>Nebraska</a><br />
      <a className={classes.a} href='https://reactjs.org'>New Hampshire</a><br />
      <a className={classes.a} href='https://reactjs.org'>New Jersey</a><br />
	  <a className={classes.a} href='https://reactjs.org'>New Mexico</a><br />
      <a className={classes.a} href='https://reactjs.org'>New York</a><br />
      <a className={classes.a} href='https://reactjs.org'>Nevada</a><br />
      <a className={classes.a} href='https://reactjs.org'>North Carolina</a><br />
      <a className={classes.a} href='https://reactjs.org'>North Dakota</a><br />
      <a className={classes.a} href='https://reactjs.org'>Ohio</a><br />
      <a className={classes.a} href='https://reactjs.org'>Oklahoma</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Oregon</a><br />
      <a className={classes.a} href='https://reactjs.org'>Pennsylvania</a><br />
      <a className={classes.a} href='https://reactjs.org'>Rhode Island</a><br />
      <a className={classes.a} href='https://reactjs.org'>South Carolina</a><br />
      <a className={classes.a} href='https://reactjs.org'>South Dakota</a><br />
      <a className={classes.a} href='https://reactjs.org'>Tennessee</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Texas</a><br />
      <a className={classes.a} href='https://reactjs.org'>Utah</a><br />
      <a className={classes.a} href='https://reactjs.org'>Vermont</a><br />
      <a className={classes.a} href='https://reactjs.org'>Virginia</a><br />
      <a className={classes.a} href='https://reactjs.org'>Washington</a><br />
      <a className={classes.a} href='https://reactjs.org'>West Virginia</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Wisconsin</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Wyoming</a>
            </Grid> 
        </Grid>
	  </Grid>
      </Grid>
    </div>
  );
}

const styles ={
	container:{
				
	},
	box:{
		columns:'4',
		marginLeft:'11%',
	},
}
