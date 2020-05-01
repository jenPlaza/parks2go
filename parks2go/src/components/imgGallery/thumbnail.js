// JavaScript Document
import React from 'react';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container : {
	width: '20%',
	position:'relative',
	textAlign:'center',
	},
	 images : {
	width: '75%',
	height:'75%',
	borderRadius: 20/ 2,
	},
}));

const Thumbnail = ({url, handleClick, index}) => {
	const classes = useStyles();
		return(
			
			<Grid container className={classes.container}>
	  			<Grid item xs={12}>
					<img src={url} alt="thumbnail images" className={classes.images}  onClick={handleClick} imgindex={index}/>
				</Grid>
			</Grid>
			
		)
	}
export default Thumbnail