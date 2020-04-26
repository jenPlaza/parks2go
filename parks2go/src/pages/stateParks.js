// JavaScript Document
import React, {Component} from 'react';
import LargeImage from '../components/imgGallery/largeImage'
import ThumbnailGrid from '../components/imgGallery/thumbnail-grid'

//Material UI
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

//console.log(window.location.pathname);
let sCode = window.location.pathname;
 let newSC = sCode.split('/stateParks/');
 newSC.shift();
const parkId = newSC;

const activity = 'artsandculture'
const targetId = newSC;
const endpoint = `stateCode=${targetId}`;

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
		.then(results =>{
		return results.json();
	}).then(data =>{
		let mList = data.data.map((use, i)=>{
			return(
				<Grid container style={styles.container}>
	  				<Grid item xs={12} md={8} style={styles.leftCol}>
{/*Park Images*/}	
	  					<Grid item xs={11} style={styles.imgs}>
							<h2>Park Images</h2>
	  					<Grid item xs={11} style={styles.activities}>
							<ul>
							{use.images.map(img =>{
							return(
							<li key={img.id} style={{}}>
								<Box key={i}>
									<img id={use.parkCode} src={img.url} alt={img.altText} style={{width:'100%'}} onClick={this.parkClick}/>
								</Box>
							</li>	
							)})}
							</ul>
	  					</Grid>
	   					</Grid> 
			
	 				
{/*Park Activities*/}
					<Grid item xs={12} style={styles.indentRight}>
		  				<h2>Park Activities</h2>
	  					<Grid item xs={11} style={styles.activities}>
							<ul>
							{use.activities.map(activity =>{
							return(
							<li key={activity.id} style={{}}>{activity.name}</li>	
							)})}
							</ul>
	  					</Grid>
	   				</Grid> 

	   			</Grid> 
	 		
			</Grid>   		
			)
		})

		this.setState({StateParks:mList});
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
					{this.state.StateParks}
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