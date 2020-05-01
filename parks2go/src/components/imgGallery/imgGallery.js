// JavaScript Document
import React from 'react';
import LargeImage from './largeImage'
import ThumbnailGrid from './thumbnail-grid'

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
padding:'4%',
},
thumbnails: {
marginTop:'-20%',
},
}));

let pCode = window.location.pathname;
let newPC = pCode.split('/park/');
 newPC.shift();
const parkId = newPC;

const endpoint = `parkCode=${parkId}`;

class ImageGallery extends React.Component {
	state ={
		imageArray: [],
		imgIndex: 0
	}

//calling fetchData function
	componentDidMount(){
	this.fetchData();
	}

	//fetch Api data and map json results in a list format
	fetchData(){
		fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
			.then(results =>{return results.json();}
		).then(data =>{data.data.forEach((use, i)=>{	
			this.setState({imageArray:data.data[i].images})

			})
		})
	}

 lgImage = () => {
	const {imageArray, imgIndex} = this.state
	if(imageArray.length){
		return(
				<LargeImage 
			lgImage={imageArray[imgIndex]}
			/>
		)
	}
	 return null
 }
 
 handleClick =(e) => {
const imageSelection = e.target.getAttribute('imgindex')
	 this.setState({imgIndex: imageSelection})
 }
	render(props) { 
		const  {classes}  = this.props;
		
		return(
			<Grid container style={styles.container}> 
			<Grid item xs={12} >
					{this.lgImage()}
				</Grid>
				<Grid item xs={12} style={styles.thumbnails}>
					<ThumbnailGrid thumbnails={this.state.imageArray} handleClick={this.handleClick}/>
				</Grid>
			</Grid>
		)
	}
}
export default ImageGallery
//export default withStyles(useStyles)(ImageGallery);

const styles ={
	container: {
padding:'4%',
},
thumbnails: {
marginTop:'-20%',
},
}