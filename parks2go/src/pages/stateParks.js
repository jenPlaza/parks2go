// JavaScript Document
import React, {Component} from 'react';
import LargeImage from '../components/imgGallery/largeImage'
import ThumbnailGrid from '../components/imgGallery/thumbnail-grid'

//Material UI
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';

//console.log(window.location.pathname);
let sCode = window.location.pathname;
 let newSC = sCode.split('/stateParks/');
 newSC.shift();
const parkId = newSC;

const activity = 'artsandculture'
const targetId = newSC;
//const endpoint = `stateCode=${targetId}`;
const endpoint = null;

class StateParks extends React.Component {
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
			console.log(data.data[i].images);
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
	render(){
		return(
			<Grid container style={styles.container}> 
			
				<Grid item xs={12} style={styles.thumbnails}>
					<ThumbnailGrid thumbnails={this.state.imageArray} handleClick={this.handleClick}/>
				</Grid>
			</Grid>
		)
	}
}
export default StateParks

const styles ={
	container: {
padding:'4%',
},
thumbnails: {
marginTop:'-20%',
},
}