// JavaScript Document
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

//images
import image from '../../images/placeholder.jpg'

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";


const Links = () => {
  return (
	  
     <Typography variant="body" align="left">
	  
      	<Link color="inherit" href="/"><img width="100%" src={image} alt="park" /></Link>
	  	{' '}
	  
    </Typography>
	 
  );
}

//exporting class SideBarLeft
export default function SideBarLeft() {
  return (
	  <Grid container style={styles.container}>

	  <Grid item xs={12} md={6} style={styles.links}>
		<Links />
	  <Links />
	  </Grid>
	   <Grid item xs={12} md={6} style={styles.links}>
	  <Links />
	  <Links />
	   </Grid>
	  </Grid>
    );
}
const styles ={
	container:{
		 border: '1px solid #ddd',	
	},
	links:{
		 border: '1px solid yellow',
	}
}

