// JavaScript Document
import React from 'react';
import Thumbnail from './thumbnail';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container : {
	height: '25%',
	width: '100%',
	display:'flex',
	flexWrap:'wrap',
	marginTop:'25%'
},
}));

const ThumbnailGrid = ({thumbnails,handleClick,i}) => {
	const classes = useStyles();
	return(
	<Grid container>
	  		<Grid item xs={12} >	
	<div className={classes.container}>
		{thumbnails.map((imageArray, i)=>{
		return(
			<Thumbnail key={i} url={imageArray.url} index={i} handleClick={handleClick}/>
			)})}
		</div>
</Grid>
</Grid>
		)
	}
export default ThumbnailGrid
