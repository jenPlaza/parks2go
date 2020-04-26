// JavaScript Document
import React, {Component} from 'react';
import Thumbnail from './thumbnail';

//Material UI
import Grid from "@material-ui/core/Grid";

const ThumbnailGrid = ({thumbnails,handleClick,i}) => {
	return(
	<Grid container>
	  		<Grid item xs={12} >	
	<div style={styles.container}>
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
const styles ={
container : {
	height: '25%',
	width: '100%',
	display:'flex',
	flexWrap:'wrap',
	marginTop:'25%'
},
}