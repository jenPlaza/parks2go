// JavaScript Document
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


//images
//import logo2 from '../../images/ptBtn3.png';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
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

      <Grid container style={styles.container}>
	  <Grid item xs={12} style={styles.map}>
	
	  </Grid>
	  
      <Grid item xs={2} style={styles.box}>
	  <h5><a className={classes.a} href='https://reactjs.org'>Alabama</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Conneticut</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Illinois</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Maine</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Missouri</a><br />
	  <a className={classes.a} href='https://reactjs.org'>New Mexico</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Oregon</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Texas</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Wisconsin</a></h5>
      </Grid>
	  
	  <Grid item xs={2} style={styles.box2}>
	  <h5><a className={classes.a} href='https://reactjs.org'>Alaska</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Delaware</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Indiana</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Maryland</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Montana</a><br />
	  <a className={classes.a} href='https://reactjs.org'>New York</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Pennsylvania</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Utah</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Wyoming</a></h5>
      </Grid>
	  
	   <Grid item xs={2} style={styles.box3}>
	   <h5><a className={classes.a} href='https://reactjs.org'>Arizona</a><br />
	   <a className={classes.a} href='https://reactjs.org'>District of Columbia</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Florida</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Iowa</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Massachusetts</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Nebraska</a><br />
	   <a className={classes.a} href='https://reactjs.org'>North Carolina</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Rhode Island</a><br />
	   <a className={classes.a} href='https://reactjs.org'>Vermont</a></h5>
       </Grid>
	  
	   <Grid item xs={2} style={styles.box4}>
	  <h5><a className={classes.a} href='https://reactjs.org'>Arkansas</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Georgia</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Kansas</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Michigan</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Nevada</a><br />
	  <a className={classes.a} href='https://reactjs.org'>North Dakota</a><br />
	  <a className={classes.a} href='https://reactjs.org'>South Carolina</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Virginia</a></h5>
      </Grid>
	  
	  <Grid item xs={2} style={styles.box5}>
	  <h5><a className={classes.a} href='https://reactjs.org'>California</a><br /><a className={classes.a} href='https://reactjs.org'>Hawaii</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Kentucky</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Minnesota</a><br />
	  <a className={classes.a} href='https://reactjs.org'>New Hampshire</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Ohio</a><br />
	  <a className={classes.a} href='https://reactjs.org'>South Dakota</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Washington</a></h5>
       </Grid>
	  
	  <Grid item xs={2} style={styles.box6}>
	  <h5><a className={classes.a} href='https://reactjs.org'>Colorado</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Idaho</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Louisiana</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Mississippi</a><br />
	  <a className={classes.a} href='https://reactjs.org'>New Jersey</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Oklahoma</a><br />
	  <a className={classes.a} href='https://reactjs.org'>Tennessee</a><br />
	  <a className={classes.a} href='https://reactjs.org'>West Virginia</a></h5>
       </Grid>

      </Grid>
    </div>
  );
}

const styles ={
	container:{
		 border: '1px solid #ddd',	
		marginTop:'-3%',
		marginLeft:'2%'
	},
	about:{
		 border: '1px solid yellow',
		paddingRight:'4%',
	},
	box:{
		 border: '1px solid red',			
	},
	box2:{
		 border: '1px solid red',
		marginLeft:'-3%'
	},
	box3:{
		 border: '1px solid red',
		marginLeft:'-3%'
	},
	box4:{
		 border: '1px solid red',
		marginLeft:'3%'
	},
	box5:{
		 border: '1px solid red',
		marginLeft:'-1%'
	},
	box6:{
		 border: '1px solid red',
		marginLeft:'0%'
	},
connect:{
		 border: '1px solid pink',	
	},
	display:{
		display:'block',
		paddingLeft:'35%',
	
	}
}
