// JavaScript Document
import React from 'react';
import ImgGallery from '../components/imgGallery/imgGallery'

//Material UI
import Grid from "@material-ui/core/Grid";
import Inprogress from '../components/progress_indicator/inProgress'
import {withStyles} from '@material-ui/styles';

//Images & Icons
import imgUrl from '../images/parkBackground.png';

const useStyles = theme => ({
	container:{
		backgroundImage: 'url(' + imgUrl + ')',	
		marginBottom:'-3%',
		paddingBottom:'12%',
		paddingLeft:'2%',
		justifyContent: 'space-around',
	},
		imgs:{
		backgroundColor:'rgb(15,15,15,0.7)',
		borderBottomLeftRadius:'30',
		borderBottomRightRadius:'30',
	},
leftCol:{
	color:'white',
	justifyContent: 'space-around',
	padding:'1%',
	[theme.breakpoints.up('md')]: {
    	marginTop: '3%',
	},
},
	rightCol:{
	color:'white',
		justifyContent: 'space-around',
		paddingLeft:'3%',
},
	h1:{
fontSize:'3rem',
},
	h3:{
		marginTop:'-8%',
		fontSize:'smaller',
	},
	moveUp:{
		marginTop:'-4%',
	},
	activities:{
		marginTop:'8%',
		marginBottom:'12%',
	},
	list:{
		columns: '3 auto',
		listStyleType:'none',
	},
	ul:{
		margin:'0',
		padding:'1%',
		listStyleType:'none',
	},
	topics:{
		columns: '3 auto',
		listStyleType:'none',
		marginBottom:'12%',		
	},
	description:{
		marginTop:'5%',
		marginBottom:'5%',
	},
	details:{
		marginBottom:'5%',
	},
	directions:{
		marginBottom:'12%',
	},
});

let pCode = window.location.pathname;
let newPC = pCode.split('/park/');
 newPC.shift();
const parkId = newPC;
const endpoint = `parkCode=${parkId}`;

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
			this.setState({ isLoading: true }, () => {
				fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
				.then(results =>{
				return results.json();
				}).then(data => {this.setState({
				isLoading:false,
				data:data.data
			})
		})
	})
}
render() { 
	const { data, isLoading } = this.state; 
	const  {classes}  = this.props;
		 	
		 	/*console.log(isLoading)*///testing : true
			
		 if(isLoading){
            return <Inprogress />
          }
			
			let newArray = data;
			 
			if (newArray != null) {
        		return (
				<Grid container className={classes.container}>	 		
					{newArray.map((use, i) =>
						<Grid item key={i} xs={12} md={4}className={classes.leftCol}>
							<Grid container>
								<Grid item xs={12} >
									<Grid container>
	  									<Grid item xs={12} >
											<h1 className={classes.h1} >{use.name}</h1>
												<h3 className={classes.h3}>{use.addresses[0].line1}, <br />
												{use.addresses[0].city}, {use.addresses[0].stateCode} {use.addresses[0].postalCode}</h3>
										</Grid> 
	  								</Grid> 
	   							</Grid>	 

	 							<Grid item xs={12} className={classes.description}>
		  							<h2>Park Description</h2>
			 						<p className={classes.moveUp}>{use.description}</p> 
	   							</Grid>

								<Grid item xs={12} className={classes.details}>
		  						<h2>Park Details</h2>
					    		<p className={classes.moveUp}><b>{use.entranceFees[0].description}</b><br />
					    		<b>Cost: </b>{use.entranceFees[0].cost}</p>	   
	   							</Grid>

	 							<Grid item xs={12} className={classes.directions}>
		  							<h2>Park Directions</h2>
									<p className={classes.moveUp}>{use.directionsInfo}</p> 
	   							</Grid>
							</Grid>  
						</Grid>	
					)}
			 	{newArray.map((use, i) =>
					<Grid key={i} item xs={12} md={8} className={classes.rightCol}>
			  			<Grid item xs={12} className={classes.imgs}>
							<ImgGallery />
	   					</Grid> 
						<Grid item xs={12} className={classes.activities}>
		  					<h2>Park Activities</h2>
	  						<Grid item xs={11} className={classes.list}>
							<ul className={classes.ul}>
								{use.activities.map(activity =>{
									return(
											<li key={activity.id} style={{backgroundColor: 'rgb(15,15,15,0.5)'}}>{activity.name}</li>	
										)})}
								</ul>
	  					  </Grid>
	   				 </Grid> 

	 				<Grid item xs={12} >
		  				<h2>Park Topics</h2>
	  					<Grid item xs={11} className={classes.topics}>
							<ul className={classes.ul}>
							{use.topics.map(topic =>{
								return(
								<li key={topic.id} style={{backgroundColor: 'rgb(15,15,15,0.5)'}}>{topic.name}</li>	
								)})}
							</ul>
	  					</Grid>
					</Grid> 

					<Grid item xs={11} >
		  				<h2>Weather Information</h2>
	  					<p>{use.weatherInfo}</p>
	   				</Grid>
			  </Grid>
			)}
		</Grid>  
		);
	}
 
  return (
	  <div className={classes.container} >
	  {this.state.park}
		</div>			
  	);
  }
}

export default withStyles(useStyles)(Park);