// JavaScript Document
import React from 'react';
//Material UI
import Grid from "@material-ui/core/Grid";

const Thumbnail = ({url, handleClick, index}) => {
		return(
			<Grid container style={styles.container}>
	  			<Grid item xs={12}>
					<img src={url} alt="thumbnail images" style={{width:'75%', height:'75%', borderRadius: 20/ 2}} onClick={handleClick} imgindex={index}/>
				</Grid>
			</Grid>
		)
	}

export default Thumbnail
const styles ={
container : {
	width: '20%',
	position:'relative',
	textAlign:'center',
	},
}