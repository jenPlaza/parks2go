// JavaScript Document
import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	images : {
	width: '100%',
	  height:'100%',
	borderRadius:30,
},
}));
const LargeImage = ({lgImage}) => {
	const classes = useStyles();
		return(
			<div > 
			<img src={lgImage.url} alt="park" className={classes.images} />
			<p>{lgImage.title}</p>
			</div>
		)
	}

export default LargeImage