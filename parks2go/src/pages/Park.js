// JavaScript Document
import React from 'react';
//import Fetch from '../components/Fetch';
import ImgGallery from '../pages/ImgGallery';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

//Images & Icons
import imgUrl from '../images/parkBackground.png';
import Print from '@material-ui/icons/Print';

import { createMuiTheme } from "@material-ui/core/styles";

const id ='bepa';
const endpoint = `parkCode=${id}`;

const theme = createMuiTheme({
	  typography: {
    fontFamily: 'Lora',
  },
	palette: {
    primary: {
      light: '#B9B9B9',
      main: '#000000',
    },
    secondary: {
      main: '#ea7a0f',
      contrastText: '#ffffff',
    },
  },
});


//Smart Component
class Park extends React.Component {
	//declaring state and new object
	state ={
		parkListing: [],
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
				<Grid container key={i} style={styles.container}>
	  				<Grid item xs={12} md={8} style={styles.leftCol}>
	  					<Grid item xs={12} md={11} style={styles.imgs}>
							<Grid item xs={12} md={11} style={styles.images}>
									<img src={use.images[0].url} alt={use.images[0].altText} style={{width: '95%', borderRadius: 50, padding: '2%'}}/>
									</Grid> 
								<Grid item xs={12} md={11} style={styles.moreImages}>				
									{use.images.map(p => {
 									return (<li key={p} style={styles.indImgs}><img src={p.url} alt={p.altText} style={{width: 80, height: 80, borderRadius: 80/ 2, padding: '1%'}}/></li>
									)})}
						</Grid>
	   					</Grid> 
	 				
					<Grid item xs={12} style={styles.indentRight}>
		  				<h2>Park Activities</h2>
	  					
	  					<Grid item xs={11} style={styles.activities}>
							<ul>
							{use.activities.map(activity =>{
							return(
							<li key={activity} style={{backgroundColor: 'rgb(15,15,15,0.5)'}}>{activity.name}</li>	
							)})}
							</ul>
	  					</Grid>
						
	   				</Grid> 
	 				<Grid item xs={12} style={styles.indentRight}>
		  				<h2>Park Topics</h2>
						
	  					<Grid item xs={11} style={styles.topics}>
							<ul>
							{use.topics.map(topic =>{
								return(
								<li key={topic} style={{backgroundColor: 'rgb(15,15,15,0.5)'}}>{topic.name}</li>	
								)})}
								</ul>
	  					</Grid>
						
					</Grid> 
					<Grid item xs={11} style={styles.indentRight}>
		  				<h2>Weather Information</h2>
	  					<p>{use.weatherInfo}</p>
	   				</Grid> 
	   			</Grid> 
	 		<Grid item xs={12} md={4}style={styles.rightCol}>
				<Grid container>
					<Grid item xs={12} style={styles.h2}>
						<Grid container>
							<Grid item xs={12} style={styles.printer}>
								<Print size={25}/>
	  						</Grid> 
	  						<Grid item xs={12} style={styles.h2}>
								<h1>{use.name}</h1>
								<h3 style={styles.moveUp}>{use.addresses[0].line1}, {use.addresses[0].stateCode}<br />
								{use.addresses[0].city}, {use.addresses[0].stateCode} {use.addresses[0].postalCode}</h3>
							</Grid> 
	  					</Grid> 
	   			</Grid> 
	 			<Grid item xs={12} style={styles.description}>
		  				<h2>Park Description</h2>
	  					<p style={styles.moveUp}>{use.description}</p>
	   			</Grid>
				<Grid item xs={12} style={styles.details}>
		  				<h2>Park Details</h2>
					    <p style={styles.moveUp}><b>{use.entranceFees[0].description}</b><br />
					    <b>Cost: </b>{use.entranceFees[0].cost}</p>
	   			</Grid>
	 			<Grid item xs={12} style={styles.directions}>
		  				<h2>Park Directions</h2>
						<p style={styles.moveUp}>{use.directionsInfo}</p>
	   			</Grid>
			</Grid>  
	   	</Grid>
	</Grid>  	

				
			)
		})

		this.setState({park:mList});
	})
}

	 render() { 
  return (
	  <div style={styles.container}>
	  {this.state.park}
		</div>			
  	);
  }
}

export default Park

const styles ={
	container:{
		backgroundImage: 'url(' + imgUrl + ')',	
		marginBottom:'-3%',
		paddingBottom:'5%',
		paddingRight:'3%',
	},
	imgs:{
		backgroundColor:'rgb(15,15,15,0.7)',
	},
	moreImages:{
		backgroundColor:'rgb(15,15,15,0.7)',
		borderBottomRightRadius: 30,
		marginBottom:'10%',
		padding:'2%',
		columns: '5 auto',
	},
	indImgs:{
		marginRight:'-5%',
		listStyleType:'none',
	},
rightCol:{
	color:'white',
},
	leftCol:{
	color:'white',
},
	printer:{
		marginTop:'7%',
		textAlign:'right',
	},
	moveUp:{
		marginTop:'-4%',
	},
	activities:{
		columns: '3 auto',
		marginBottom:'10%',
		listStyleType:'none',
	},
	topics:{
		columns: '3 auto',
		listStyleType:'none',
		marginBottom:'10%',
	},
	indentRight:{
		paddingLeft:'5%',
	},
	description:{
		marginBottom:'8%',
		marginTop:'10%',
	},
	details:{
		marginBottom:'6%',
	},
	directions:{
		marginBottom:'6%',
	},
}

